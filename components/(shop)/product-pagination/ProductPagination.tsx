'use client';

import { getProductByClient } from '@/apis/shop';
import { IProduct } from '@/types';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Product from '../product/product';
import { Button } from '@/components/custom/button';
import ClipLoader from "react-spinners/ClipLoader";

export interface IProductPaginationProps {
    token: string;
}

export function ProductPagination({ token }: IProductPaginationProps) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentPageFromUrl = Number(searchParams.get('current')) || 1;
    const pageSize = Number(searchParams.get('pageSize')) || 10;

    const [currentPage, setCurrentPage] = useState<number>(currentPageFromUrl);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        console.log("token",token)
        const fetchProducts = async () => {
            setIsLoading(true); 
            try {
                const data = await getProductByClient({ token, current: currentPage, pageSize });
                setCurrentPage(data.data.meta.current);
                setProducts(data.data.result);
                setTotalPage(data.data.meta.pages);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, [currentPage, token, pageSize]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        router.push(`/product-list?current=${page}&pageSize=${pageSize}`, { scroll: false });
    };

    if(isLoading){
        return (
            <div className='flex justify-center items-center'>
                <ClipLoader
                    color="gray"
                    loading={isLoading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        )
    }

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[80%] gap-10 tiny:gap-5 sm:gap-4 md:gap-4 mb-10 mx-auto mt-10">
                {products?.map((item) => (
                    <Product
                        key={item._id}
                        id={item._id}
                        name={item.product_name}
                        description={item.product_description}
                        originalPrice={item.original_price}
                        discountPrice={
                            item.original_price - (item.original_price * item.discount) / 100
                        }
                        discountPercent={item.discount}
                        thumbnail={item.thumbnail}
                    />
                ))}
            </div>
            <div className="flex items-center space-x-2 justify-center">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                {totalPage < 10 ? (
                    <div className="flex items-center space-x-1">
                        {[...Array(totalPage)].map((_, index) => (
                            <Button
                                key={index}
                                variant={currentPage === index + 1 ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </Button>
                        ))}
                    </div>
                ) : null}
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPage}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}
