import { getProduct } from '@/apis/shop';
import Banner from '@/components/(shop)/banner/banner';
import Explore from '@/components/(shop)/explore/explore';
import Furnitor from '@/components/(shop)/furnitor/furnitor';
import Product from '@/components/(shop)/product/product';
import Range from '@/components/(shop)/range/range';
import { ROUTES } from '@/constants';
import { IProduct } from '@/types';
import Link from 'next/link';

export default async function Home() {
    const data = await getProduct();
    const visibleProducts = data?.result.slice(0, 8);

    return (
        <div>
            <div className="w-full h-[716px] hidden lg:block">
                <Banner />
            </div>
            <div className="p-5 md:p-12">
                <Range />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold text-xl md:text-3xl text-center text-text-category mb-5">
                    Our Products
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[80%] gap-10 tiny:gap-5 sm:gap-4 md:gap-4 mb-10">
                    {visibleProducts.map((item: IProduct) => (
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
                {data?.result.length > 8 && (
                    <Link
                        href={ROUTES.CLIENT_PRODUCT_LIST}
                        className="mb-10 lg:w-36 bg-button-background text-center text-white py-2 rounded-xl hover:bg-button-background/30"
                    >
                        Show more
                    </Link>
                )}
            </div>
            <div>
                <Explore
                    title="50+ Beautiful rooms inspiration"
                    description="Our designer already made a lot of beautiful prototipe of rooms that inspire you"
                />
            </div>
            <div className="max-w-[1440px] mx-auto my-10 hidden md:block">
                <div className="flex justify-center items-center flex-col">
                    <p className="text-explore font-semibold text-xl">Share your setup with</p>
                    <h2 className="text-text-product-name font-bold text-4xl">#FuniroFurniture</h2>
                </div>
                <Furnitor />
            </div>
        </div>
    );
}
