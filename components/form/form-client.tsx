'use client';

import { Button } from '@/components/custom/button';
import { ProductSize } from '@/constants/enum/status-enum';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { z } from 'zod';

import * as React from 'react';
import { IProduct } from '@/types';
import QuantityInput from '../custom/quantity-input';
import { Input } from '../ui/input';

const formSchema = z.object({
    product_name: z.string({ required_error: 'Product name is required' }).min(1, {
        message: 'Product name must be at least 1 characters'
    }),
    product_description: z
        .string({
            required_error: 'Product description is required'
        })
        .min(10, { message: 'Product description must be at least 10 characters' }),
    thumbnail: z.string({ required_error: 'Thumbnail is required' }),
    original_price: z.number({ required_error: 'Original price is required' }).positive(),
    discount: z.number({ required_error: 'Discount price is required' }),
    color: z.string({ required_error: 'Color price is required' }).min(7, {
        message: 'Color must be hex sample'
    }),
    categories: z.string({ required_error: 'Category price is required' }),
    size: z
        .string({ required_error: 'Size price is required' })
        .min(1, { message: 'Size is must be Choose' }),
    quantity: z.number({ required_error: 'Quantity is required' }),
    brand: z.string({ required_error: 'Brand is required' })
});

interface FormClientProps {
    product: IProduct;
}
export function FormClient({ product }: FormClientProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            product_name: product.product_name,
            product_description: product.product_description,
            thumbnail: 'ádsadsadasd',
            original_price: product.original_price,
            discount: product.discount,
            color: 'asdasdsadas',
            categories: product.categories._id,
            size: '',
            quantity: 1,
            brand: product.brand
        }
    });
    const { control, handleSubmit } = form;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };
    return (
        <Form {...form}>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Các trường ẩn khác */}
                    <FormField
                        control={form.control}
                        name="product_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="hidden" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="product_description"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="hidden" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="thumbnail"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="hidden" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="original_price"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="hidden" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="discount"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="hidden" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="hidden" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="categories"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="hidden" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="color"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="hidden" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div>
                        <FormField
                            control={form.control}
                            name="size"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="flex gap-2">
                                            {Object.values(ProductSize)
                                                .filter((size) => isNaN(Number(size)))
                                                .map((size) => (
                                                    <Button
                                                        key={size}
                                                        type="button"
                                                        variant={
                                                            field.value === size
                                                                ? 'default'
                                                                : 'outline'
                                                        }
                                                        onClick={() => field.onChange(size)}
                                                    >
                                                        {size}
                                                    </Button>
                                                ))}
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex gap-2 mt-5">
                            <QuantityInput control={control} name={'quantity'} />
                            <Button
                                type="submit"
                                variant="outline"
                                className="p-2 lg:w-[150px] max-w-[200px] h-[60px] hover:bg-button-background hover:text-white text-xl"
                            >
                                Add to cart
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="p-2 lg:w-[150px] max-w-[200px] h-[60px] text-xl"
                            >
                                Compare
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Form>
    );
}
