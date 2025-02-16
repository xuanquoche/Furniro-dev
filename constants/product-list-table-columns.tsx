'use client';

import { ColumnDef } from '@tanstack/react-table';
import { PaymentStatus } from './enum/status-enum';
import { Badge } from '@/components/ui/badge';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { Button } from '@/components/custom/button';
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

const colorStatus = (status: PaymentStatus) => {
    switch (status) {
        case PaymentStatus.PUBLISHED:
            return { backgroundColor: '#E7F4EE', color: '#0D894F' };
        case PaymentStatus.OUT_OF_STOCK:
            return { backgroundColor: '#FEEDEC', color: '#F04438' };
        case PaymentStatus.DRAFT:
            return { backgroundColor: '#F0F1F3', color: '#667085' };
        default:
            return { backgroundColor: 'yellow', color: 'black' };
    }
};

const formatStatus = (status: PaymentStatus) => {
    switch (status) {
        case PaymentStatus.PUBLISHED:
            return 'PUBLISHED';
        case PaymentStatus.OUT_OF_STOCK:
            return 'OUT_OF_STOCK';
        case PaymentStatus.DRAFT:
            return 'DRAFT';
        default:
            return 'Unknown';
    }
};

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE').format(price);
};

export const columns: ColumnDef<{
    id: string;
    product: string;
    category: string;
    size: string;
    color: string;
    brand: string;
    quantity: number;
    status: PaymentStatus;
    discount: number;
    price: number;
    totalPrice: number;
    thumbnail: string;
}>[] = [
    {
        accessorKey: 'product',
        header: 'Product',
        cell: ({ row }) => {
            return (
                <div className="flex gap-2 items-center justify-center">
                    <Image
                        src={row.original.thumbnail}
                        alt="thumbnail"
                        width={80}
                        height={40}
                        className="object-cover"
                    />
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">{row.getValue('product')}</p>
                        <p>{row.original.quantity}</p>
                    </div>
                </div>
            );
        }
    },
    {
        accessorKey: 'category',
        header: 'Category',
        cell: ({ row }) => {
            return (
                <div>
                    <p>{row.original.category}</p>
                </div>
            );
        }
    },
    {
        accessorKey: 'size',
        header: 'Size'
    },
    {
        accessorKey: 'color',
        header: 'Color',
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-2">
                    <div
                        className="h-4 w-4 rounded-full"
                        style={{ backgroundColor: row.original.color }}
                    />
                    <span>{row.original.color}</span>
                </div>
            );
        }
    },
    {
        accessorKey: 'brand',
        header: 'Brand'
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({
            row: {
                original: { status }
            }
        }) => {
            return (
                <Badge
                    variant="default"
                    style={{ ...colorStatus(status) }}
                    className="round-xl px-3 py-1"
                >
                    {formatStatus(status)}
                </Badge>
            );
        }
    },
    {
        accessorKey: 'discount',
        header: 'Discount'
    },
    {
        accessorKey: 'price',
        header: 'Price',
        cell: ({ row }) => {
            return (
                <div>
                    <p>{formatPrice(row.original.price)}</p>
                </div>
            );
        }
    },
    {
        accessorKey: 'totalPrice',
        header: 'Total Price',
        cell: ({ row }) => {
            return (
                <div>
                    <p>{formatPrice(row.original.totalPrice)}</p>
                </div>
            );
        }
    },
    {
        accessorKey: 'action',
        header: 'Action',
        cell: function ActionCell({ row }) {
            const [isHovered, setIsHovered] = React.useState(false);
            const router = useRouter();

            return (
                <div className="flex gap-3">
                    <Button
                        variant="outline"
                        className="bg-background-admin hover:bg-background-hover-admin"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() =>
                            router.push(`/admin/product/product-list/${row.original.id}`)
                        }
                    >
                        <CiEdit size={20} color={isHovered ? 'black' : 'white'} />
                    </Button>

                    <Button
                        variant="outline"
                        className="hover:bg-background-hover-admin"
                        onClick={() => console.log(`Deleting item with ID: ${row.original.id}`)}
                    >
                        <MdDelete size={20} color="red" />
                    </Button>
                </div>
            );
        }
    }
];
