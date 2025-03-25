import { getProductDetail } from '@/apis/shop';
import { DetailImage } from '@/components/(shop)/product-image/detail-image';
import StarRating from '@/components/(shop)/product-image/star-rating';
import { FormClient } from '@/components/form/form-client';
import { CustomPath } from '@/components/custom/custom-path';

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
                <p className="align-middle flex items-center font-normal">{product.product_name}</p>
            </div>
            <div className="px-10 md:px-20 lg:px-32 py-10 grid grid-cols-2 gap-3">
                <div>
                    <DetailImage />
                </div>
                <div>
                    <h3 className="font-normal text-2xl md:text-5xl">{product?.product_name}</h3>
                    <div className="flex gap-5 my-4">
                        <p className="md:text-2xl text-text-gray">
                            {product?.original_price -
                                (product?.original_price * product?.discount) / 100}{' '}
                            vnd
                        </p>
                        <p className="md:text-xl text-black-800 line-through self-end">
                            ${product?.original_price} vnd
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <StarRating rating={4} /> |{' '}
                        <p className="text-text-gray">5 customers reviewed</p>
                    </div>
                    <div className="max-w-[500px]">{product?.product_description}</div>
                    <div>
                        <FormClient product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}
