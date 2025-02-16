'use client';

import Image from 'next/image';
import DefaultImage from '@/public/images/living-room.png';
import { formatPrice } from '@/utils/split-price';
import { useState } from 'react';
import { Button } from '@/components/custom/button';
import { ShareIcon, CompareIcon, LoveIconMini } from '@/public/icons';

interface ProductProps {
    name?: string;
    description?: string;
    originalPrice: number;
    discountPrice: number;
    discountPercent?: number;
    isNew?: boolean;
    thumbnail?: string;
}

const Product = ({
    name,
    description,
    originalPrice,
    discountPrice,
    discountPercent,
    isNew,
    thumbnail
}: ProductProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isLiked, setIsLiked] = useState<boolean>(false);

    return (
        <div
            className="flex justify-center relative cursor-pointer w-full"
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-full">
                <div className="relative">
                    <Image
                        src={thumbnail ? thumbnail : DefaultImage}
                        alt="thumbnail"
                        className="w-full"
                    />
                    {discountPercent && !isHovered && (
                        <div className="absolute bg-discount-background text-white text-sm flex justify-center items-center rounded-full top-4 right-3 px-2 py-1 w-9 h-9">
                            -{discountPercent}%
                        </div>
                    )}

                    {isNew && !isHovered && (
                        <div className="absolute bg-new-product text-white text-sm flex justify-center items-center rounded-full top-4 right-3 px-2 py-1 w-9 h-9">
                            New
                        </div>
                    )}
                </div>

                <div className="flex flex-col px-3 py-4 bg-card">
                    <p className="font-semibold text-lg md:text-xl lg:text-2xl text-text-category">
                        {name}
                    </p>
                    <p className="font-medium text-sm md:text-sm text-text-sort-description">
                        {description}
                    </p>
                    <div className="flex gap-2 justify-start items-center">
                        <p className="text-sm sm:text-xl md:text-lg text-text-category">
                            {formatPrice(discountPrice)}
                        </p>
                        <p className="text-xs sm:text-lg md:text-xs line-through text-discount-price">
                            {formatPrice(originalPrice)}
                        </p>
                    </div>
                </div>
            </div>
            {isHovered && (
                <div className="flex gap-4 bg-text-product-name/40 absolute z-40 w-full h-full justify-center items-center flex-col">
                    <Button
                        variant="outline"
                        className="text-button-background font-semibold text-base"
                    >
                        Add to cart
                    </Button>
                    <div className="justify-around w-full px-2 flex flex-col xl:flex-row">
                        <Button
                            variant="ghost"
                            className="flex justify-center items-center lg:text-xs gap-2 p-0"
                        >
                            <ShareIcon />
                            <p className="font-semibold text-base text-white hover:text-button-background">
                                Share
                            </p>
                        </Button>
                        <Button
                            variant="ghost"
                            className="flex justify-center items-center lg:text-xs gap-2 p-0"
                        >
                            <CompareIcon />
                            <p className="font-semibold text-base text-white hover:text-button-background">
                                Compare
                            </p>
                        </Button>
                        <Button
                            variant="ghost"
                            className="flex justify-center items-center lg:text-xs gap-2 p-0"
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            <LoveIconMini isActive={isLiked} />
                            <p className="font-semibold text-base text-white hover:text-button-background">
                                Like
                            </p>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;
