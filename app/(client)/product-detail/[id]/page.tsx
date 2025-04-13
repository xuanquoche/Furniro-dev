import { getProductDetail } from '@/apis/shop';
import { DetailImage } from '@/components/(shop)/product-image/detail-image';
import StarRating from '@/components/(shop)/product-image/star-rating';
import { FormClient } from '@/components/form/form-client';
import { CustomPath } from '@/components/custom/custom-path';
import ProductTabs from '@/components/(shop)/tab/product-tabs';
import { IoLogoFacebook } from 'react-icons/io5';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const productId = (await params).id;

    const paths = ['Home', 'Shop'];

    const product = await getProductDetail({ productId });

    console.log('product', product);

    return (
        <div>
            <div className="flex gap-2 bg-standard px-10 md:px-16 py-5">
                <CustomPath paths={paths} />
                <div className="w-0.5 bg-gray-800" />
                <p className="align-middle flex items-end font-normal">{product.product_name}</p>
            </div>
            <div className="px-10 md:px-20 lg:px-32 py-10 grid grid-cols-2 gap-3">
                <div>
                    <DetailImage />
                </div>
                <div>
                    <h3 className="font-normal text-2xl md:text-5xl lg:text-6xl">
                        {product?.product_name}
                    </h3>
                    <div className="flex gap-5 my-6">
                        <p className="md:text-2xl lg:text-4xl text-text-gray">
                            {product?.original_price -
                                (product?.original_price * product?.discount) / 100}{' '}
                            vnd
                        </p>
                        <p className="md:text-xl text-black-800 line-through self-end">
                            ${product?.original_price} vnd
                        </p>
                    </div>
                    <div className="flex gap-3 my-6">
                        <StarRating rating={4} /> |{' '}
                        <p className="text-text-gray text-2xl">5 customers reviewed</p>
                    </div>
                    <div className="max-w-[500px] text-2xl my-6">
                        {product?.product_description}
                    </div>
                    <div className="my-6">
                        <FormClient product={product} />
                        <div className="w-full bg-gray-300 h-[1px] md:mt-20" />
                        <div>
                            <div className="text-text-gray text-2xl my-6 flex lg:gap-20">
                                <p className="min-w-[120px]">SKU</p>{' '}
                                <p>
                                    {': '}
                                    {product?._id}
                                </p>
                            </div>
                            <div className="text-text-gray text-2xl my-6 flex lg:gap-20">
                                <p className="min-w-[120px]">Category</p>{' '}
                                <p>
                                    {': '}
                                    {product?.categories.name}
                                </p>
                            </div>
                            <div className="text-text-gray text-2xl my-6 flex lg:gap-20">
                                <p className="min-w-[120px]">Tags</p>{' '}
                                <p>
                                    {': '}
                                    Shop, Chair, Sofa
                                </p>
                            </div>
                            <div className="text-text-gray text-2xl my-6 flex lg:gap-20">
                                <p className="min-w-[120px]">Share</p>{' '}
                                <div className="flex justify-between gap-3">
                                    {': '}
                                    <IoLogoFacebook />
                                    <BiLogoInstagramAlt />
                                    <TbBrandYoutubeFilled />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <ProductTabs />
        </div>
    );
}
