import { getCategories, getProductDetail } from '@/apis/shop';
import ActionButton from '@/components/common/action-button';
import Breadcrumb from '@/components/custom/bread-crumb';
import AddProductForm from '@/components/form/add-product';
import { cookies } from 'next/headers';

export default async function AddProduct({ params }: { params: Promise<{ id: string }> }) {
    const categories = await getCategories();

    const token = (await cookies()).get('access_token');
    const productId = (await params).id;
    const product = await getProductDetail({ productId: productId });
    console.log('product id', productId);

    return (
        <div>
            <div className="flex justify-between">
                <Breadcrumb />
                <ActionButton isAdd={false} />
            </div>
            <div className="mt-5">
                <AddProductForm
                    categories={categories || []}
                    token={token?.value || ''}
                    product={productId !== 'add' ? product : null}
                />
            </div>
        </div>
    );
}
