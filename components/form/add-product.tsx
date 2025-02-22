'use client';

import { addProduct, ICategory } from '@/apis/shop';
import { PaymentStatus, ProductSize } from '@/constants/enum/status-enum';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaImage } from 'react-icons/fa6';
import { z } from 'zod';
import { Button } from '../custom/button';
import { CustomFileInput } from '../custom/input-file';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import CustomFormField from './input-field';
import SelectField from './select-field';
import CustomColorPicker from './color-picker';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';
import TextAreaField from './text-area-field';
import { IProduct } from '@/types';

interface AddProductFormProps {
    categories: ICategory[];
    token: string;
    product: IProduct | null;
}

const AddProductForm = ({ categories, token, product }: AddProductFormProps) => {
    const [showThumbnail, setShowThumbnail] = useState<string>('');
    const [showImage, setShowImage] = useState<string[]>([]);
    const [originPrice, setOriginPrice] = useState<number>(0);
    const [isDetail, setIsDetail] = useState<boolean>(false);
    const [discount, setDiscount] = useState<number>(0);

    const router = useRouter();

    const formSchema = z.object({
        product_name: z.string({ required_error: 'Product name is required' }).min(1, {
            message: 'Product name must be at least 1 characters'
        }),
        product_description: z
            .string({
                required_error: 'Product description is required'
            })
            .min(10, { message: 'Product description must be at least 10 characters' }),
        thumbnail: z
            .string({ required_error: 'Thumbnail is required' })
            .url('Invalid thumbnail URL'),
        original_price: z.number({ required_error: 'Original price is required' }).positive(),
        discount: z.number({ required_error: 'Discount price is required' }),
        color: z.string({ required_error: 'Color price is required' }).min(7, {
            message: 'Color must be hex sample'
        }),
        categories: z.string({ required_error: 'Category price is required' }),
        size: z.string({ required_error: 'Size price is required' }),
        quantity: z.number({ required_error: 'Quantity is required' }),
        brand: z.string({ required_error: 'Brand is required' }),
        status: z.nativeEnum(PaymentStatus, {
            required_error: 'Status is required'
        }),
        image: z.array(z.string().url('Invalid image URL')).optional()
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            product_name: '',
            product_description: '',
            thumbnail: '',
            original_price: 0,
            discount: 0,
            color: '',
            categories: '',
            size: '',
            quantity: 0,
            status: PaymentStatus.DRAFT,
            brand: '',
            image: []
        }
    });

    useEffect(() => {
        if (product != null) {
            form.reset({
                product_name: product.product_name,
                product_description: product.product_description,
                thumbnail: product.thumbnail,
                original_price: product.original_price,
                discount: product.discount,
                color: product.color,
                categories: product.categories?._id,
                size: product.size,
                quantity: product.quantity,
                status: product.status,
                brand: product.brand,
                image: product.images
            });
            setIsDetail(true);
        }
    }, [product, form, isDetail]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const body = {
            ...values,
            thumbnail: showThumbnail.length > 0 ? showThumbnail : product?.thumbnail,
            image: showImage
        };

        const isUpdating = isDetail && product?._id;
        const url = isUpdating ? `products/${product._id}` : 'products';
        const method = isUpdating ? 'PATCH' : 'POST';

        try {
            const response = await addProduct({ url, method, token, body });

            if (response) {
                toast(`Product ${isUpdating ? 'updated' : 'added'} successfully`);
                router.push(ROUTES.PRODUCT_LIST);
            }
        } catch (error) {
            console.error('Error submitting product:', error);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3 gap-3">
                        <div className="bg-white px-4 py-4 rounded-xl mb-5">
                            <h3 className="font-medium text-lg mb-2">General Information</h3>
                            <CustomFormField
                                label="Product name"
                                name="product_name"
                                control={form.control}
                                className="rounded-xl bg-primary-admin"
                                placeholder="Type product name here ..."
                            />
                            <TextAreaField
                                label="Product description"
                                name="product_description"
                                control={form.control}
                                className="rounded-xl mt-2"
                            />
                        </div>

                        <div className="bg-white px-4 py-4 rounded-xl mb-5">
                            <h3 className="font-medium text-lg mb-2">Media</h3>
                            <FormField
                                name="thumbnail"
                                control={form.control}
                                render={({}) => (
                                    <FormItem>
                                        <FormLabel>
                                            Thumbnail{' '}
                                            <span className="text-red-600">(1 image)</span>
                                        </FormLabel>
                                        <FormControl>
                                            <div className="bg-primary-admin flex p-8 justify-center items-center flex-col gap-4">
                                                {(() => {
                                                    const imageSrc =
                                                        showThumbnail && !isDetail
                                                            ? showThumbnail
                                                            : (product?.thumbnail ?? null);

                                                    return imageSrc ? (
                                                        <Image
                                                            src={imageSrc}
                                                            alt="Preview"
                                                            className={cn('mt-2', {
                                                                hidden:
                                                                    !isDetail &&
                                                                    showThumbnail.length < 1
                                                            })}
                                                            width={200}
                                                            height={200}
                                                        />
                                                    ) : null;
                                                })()}

                                                <div
                                                    className={cn(
                                                        'p-2 rounded-full bg-background-hover-admin',
                                                        { hidden: showThumbnail }
                                                    )}
                                                >
                                                    <FaImage />
                                                </div>
                                                <p className={cn({ hidden: showThumbnail })}>
                                                    Drag and drop image here, or click add image
                                                </p>
                                                <CustomFileInput
                                                    name="thumbnail"
                                                    control={form.control}
                                                    setShowThumbnail={setShowThumbnail}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            ></FormField>

                            <FormField
                                name="image"
                                control={form.control}
                                render={({}) => (
                                    <FormItem>
                                        <FormLabel>
                                            Image{' '}
                                            <span className="text-red-600">(can be multiple)</span>
                                        </FormLabel>
                                        <FormControl>
                                            <div className="bg-primary-admin flex p-8 justify-center items-center gap-4 flex-col">
                                                <div className="flex flex-row gap-4 flex-wrap max-w-[90%] h-auto">
                                                    {showImage.length > 0 && !isDetail
                                                        ? showImage.map((img, index) => (
                                                              <Image
                                                                  key={index}
                                                                  src={img}
                                                                  alt={`Preview ${index}`}
                                                                  className="mt-2"
                                                                  width={200}
                                                                  height={200}
                                                              />
                                                          ))
                                                        : product?.images.map((item, index) => (
                                                              <Image
                                                                  key={index}
                                                                  src={item || ''}
                                                                  alt="Preview"
                                                                  className="mt-2"
                                                                  width={200}
                                                                  height={200}
                                                              />
                                                          ))}
                                                </div>
                                                <div
                                                    className={cn(
                                                        'p-2 rounded-full bg-background-hover-admin',
                                                        { hidden: showImage }
                                                    )}
                                                >
                                                    <FaImage />
                                                </div>
                                                <p className={cn({ hidden: showImage })}>
                                                    Drag and drop image here, or click add image
                                                </p>
                                                <CustomFileInput
                                                    name="image"
                                                    control={form.control}
                                                    setShowImage={setShowImage}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            ></FormField>
                        </div>

                        <div className="bg-white px-4 py-4 rounded-xl mb-5">
                            <h3 className="font-medium text-lg mb-2">Pricing</h3>
                            <div className="flex">
                                <FormField
                                    name="original_price"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Base price</FormLabel>
                                            <FormControl>
                                                <div className="flex p-2 justify-center items-center flex-col gap-4">
                                                    <Input
                                                        type="text"
                                                        placeholder="Type original price here ..."
                                                        className="rounded-xl bg-primary-admin"
                                                        {...field}
                                                        value={
                                                            field.value
                                                                ? new Intl.NumberFormat(
                                                                      'de-DE'
                                                                  ).format(field.value)
                                                                : ''
                                                        }
                                                        onChange={(e) => {
                                                            const rawValue = e.target.value.replace(
                                                                /\./g,
                                                                ''
                                                            );
                                                            const numericValue = Number(rawValue);
                                                            if (!isNaN(numericValue)) {
                                                                field.onChange(numericValue);
                                                            }
                                                            setOriginPrice(numericValue);
                                                        }}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                ></FormField>

                                <FormField
                                    name="discount"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Discount precentage (%)</FormLabel>
                                            <FormControl>
                                                <div className="flex p-2 justify-center items-center flex-col gap-4">
                                                    <Input
                                                        type="text"
                                                        placeholder="Type original price here ..."
                                                        className="rounded-xl bg-primary-admin"
                                                        {...field}
                                                        value={field.value}
                                                        onChange={(e) => {
                                                            const rawValue = e.target.value;
                                                            const numericValue = Number(rawValue);
                                                            if (
                                                                !isNaN(numericValue) &&
                                                                numericValue <= 100
                                                            ) {
                                                                field.onChange(numericValue);
                                                                setDiscount(numericValue);
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                ></FormField>
                            </div>
                            <h3 className="font-medium text-lg my-2">Price (After discount)</h3>
                            <div className="bg-background-admin px-2 py-2 rounded-xl">
                                <p className="font-semibold text-white text-center">
                                    {originPrice
                                        ? new Intl.NumberFormat('de-DE').format(
                                              originPrice - (originPrice * discount) / 100
                                          )
                                        : ''}
                                </p>
                            </div>
                        </div>

                        <p>{form.formState.errors.discount?.message}</p>

                        <div className="bg-white px-4 py-4 rounded-xl mb-5">
                            <h3 className="font-medium text-lg mb-2">Inventory</h3>
                            <div className="flex gap-4">
                                <CustomFormField
                                    name="brand"
                                    label="Brand"
                                    control={form.control}
                                    placeholder="Type brand name here .."
                                />
                                <FormField
                                    name="quantity"
                                    control={form.control}
                                    render={({}) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Quantity</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Type product descrption here ..."
                                                    type="number"
                                                    className="resize-none rounded-xl bg-primary-admin"
                                                    {...form.register('quantity', {
                                                        valueAsNumber: true
                                                    })}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                ></FormField>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col gap-4">
                            <div className="bg-white px-4 py-4 rounded-xl">
                                <SelectField
                                    label="Size"
                                    name="size"
                                    control={form.control}
                                    options={ProductSize}
                                    placeholder={'Choose size'}
                                />
                            </div>
                            <div className="bg-white px-4 py-4 rounded-xl">
                                <SelectField
                                    label="Status"
                                    name="status"
                                    control={form.control}
                                    options={PaymentStatus}
                                    placeholder={'Choose status'}
                                />
                            </div>

                            <div className="bg-white px-4 py-4 rounded-xl">
                                <SelectField
                                    label="Categories"
                                    name="categories"
                                    control={form.control}
                                    options={categories?.reduce(
                                        (acc, category) => {
                                            (acc as Record<string, string>)[category.name] =
                                                category._id;
                                            return acc;
                                        },
                                        {} as Record<string, string>
                                    )}
                                    placeholder={'Choose category'}
                                />
                            </div>
                            <div className="bg-white px-4 py-4 rounded-xl">
                                <CustomColorPicker
                                    name="color"
                                    control={form.control}
                                    label="Color"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {!isDetail ? (
                    <Button
                        type="submit"
                        className="bg-background-admin hover:bg-background-admin/80 w-20 self-end"
                        loading={form.formState.isSubmitting}
                    >
                        Save
                    </Button>
                ) : (
                    <Button
                        type="submit"
                        className="bg-background-admin hover:bg-background-admin/80 w-20 self-end"
                        loading={form.formState.isSubmitting}
                    >
                        Update
                    </Button>
                )}
            </form>
        </Form>
    );
};

export default AddProductForm;
