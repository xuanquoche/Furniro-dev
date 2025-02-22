import { getProductDetail } from '@/apis/shop';
import { CustomPath } from '@/components/custom/custom-path';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const productId = (await params).id;

    const paths = ['Home', 'Shop'];

    const product = await getProductDetail({productId})

    return (
        <div>
            <div className='flex gap-2 bg-standard px-16 py-5'>
                <CustomPath paths={paths} />
                <div className='w-0.5 bg-gray-800'/>
                <p className='align-middle flex items-center font-normal'>{product.product_name}</p>
            </div>
        </div>
    );
}
