import { getProduct } from '@/apis/shop';
import { ProductListTable } from '@/components/(admin)/product-list';
import ActionButton from '@/components/common/action-button';
import Breadcrumb from '@/components/custom/bread-crumb';
import { columns } from '@/constants';
import { IProduct } from '@/types';

export default async function ProductList() {
    const data = await getProduct();

    const formatData = data?.result.map((item: IProduct) => ({
        id: item._id,
        product: item.product_name,
        category: item.categories?.name || 'NULL',
        size: item.size,
        color: item.color,
        brand: item.brand,
        quantity: item.quantity,
        status: item.status,
        price: item.original_price,
        discount: item.discount,
        totalPrice: item.original_price - (item.original_price * item.discount) / 100,
        thumbnail: item.thumbnail
    }));

    return (
        <div>
            <div className="flex justify-between">
                <Breadcrumb />
                <ActionButton isAdd />
            </div>
            <div className="mt-5">
                <ProductListTable columns={columns} data={formatData} />
            </div>
        </div>
    );
}
