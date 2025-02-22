import * as React from 'react';
import Image from 'next/image';
import BackgroundShopList from '@/public/images/background-shop-list.png';
import { CustomPath } from '@/components/custom/custom-path';
import { cookies } from 'next/headers';
import { ProductPagination } from '@/components/(shop)/product-pagination/ProductPagination';
import { Standard } from '@/components/(shop)/standard/standard';

export default async function ProductList() {
    const paths = ['Home', 'Shop'];
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value || '';
    
    return (
        <div>
            <div className="w-full relative">
                <Image src={BackgroundShopList} alt="background" className="w-full object-cover" />
                <div>
                    <CustomPath
                        paths={paths}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
            </div>
            <ProductPagination token={token} />
            <Standard />
        </div>
    );
}
