import { getCategories, getProductDetail } from '@/apis/shop';
import ActionButton from '@/components/common/action-button';
import Breadcrumb from '@/components/custom/bread-crumb';
import AddProductForm from '@/components/form/add-product';
import { Suspense } from 'react';

export default async function AddProduct({ params }: { params: Promise<{ id: string }> }) {
    const categories = await getCategories();

    const productId = (await params).id;
    const product = await getProductDetail({ productId: productId });

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <div className="flex justify-between">
                    <Breadcrumb />
                    <ActionButton isAdd={false} />
                </div>
                <div className="mt-5">
                    <AddProductForm
                        categories={categories || []}
                        product={productId !== 'add' ? product : null}
                    />
                </div>
            </div>
        </Suspense>
    );
}
