'use client';

import { Button } from '@/components/custom/button';
import { ProductSize } from '@/constants/enum/status-enum';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';

import * as React from 'react';
import { IProduct } from '@/types';

const formSchema = z.object({
    product_name: z.string({ required_error: 'Product name is required' }).min(1, {
        message: 'Product name must be at least 1 characters'
    }),
    product_description: z
        .string({
            required_error: 'Product description is required'
        })
        .min(10, { message: 'Product description must be at least 10 characters' }),
    thumbnail: z.string({ required_error: 'Thumbnail is required' }).url('Invalid thumbnail URL'),
    original_price: z.number({ required_error: 'Original price is required' }).positive(),
    discount: z.number({ required_error: 'Discount price is required' }),
    color: z.string({ required_error: 'Color price is required' }).min(7, {
        message: 'Color must be hex sample'
    }),
    categories: z.string({ required_error: 'Category price is required' }),
    size: z.string({ required_error: 'Size price is required' }),
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
            thumbnail: '',
            original_price: product.original_price,
            discount: product.discount,
            color: '',
            categories: product.categories._id,
            size: '',
            quantity: 0,
            brand: product.brand
        }
    });
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };
    return (
        <Form {...form}>
            <div>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div>
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

                        {/* Trường size với các nút chọn kích thước */}
                        <FormField
                            control={form.control}
                            name="size"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Size</FormLabel>
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
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </Form>
    );
}
