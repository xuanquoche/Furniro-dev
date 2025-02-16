'use client';

import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
    const pathname = usePathname();
    const pathParts = pathname.split('/').filter(Boolean);

    const formatLabel = (text: string, isLast: boolean) => {
        if (isLast && text.length > 10) {
            return 'Edit';
        }
        return text.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
    };

    return (
        <nav className="text-gray-600 text-sm">
            <ol className="flex items-center space-x-2">
                {pathParts.map((part, index) => {
                    const isLast = index === pathParts.length - 1;
                    const isFirst = index === 0;
                    const href = '/' + pathParts.slice(0, index + 1).join('/');
                    const label = pathParts[index] || (isNaN(Number(part)) ? part : 'Detail');
                    return (
                        <li key={href} className="flex items-center space-x-2 cursor-pointer">
                            {!isFirst && <span className="text-gray-400">{'>'}</span>}
                            {isLast ? (
                                <span className="text-button-background">
                                    {formatLabel(label, isLast)}
                                </span>
                            ) : (
                                <p className="text-gray-800">{formatLabel(label, false)}</p>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
