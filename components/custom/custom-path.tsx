import * as React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

export interface ICustomPathProps {
    paths: string[];
    className?: string;
}

export function CustomPath({ paths, className }: ICustomPathProps) {
    return (
        <div className={`flex ${className}`}>
            {paths.map((item, index) => {
                const isFirst = index === 0;
                const isLast = paths.length - 1 === index;
                return (
                    <div key={index} className="flex items-center gap-2 mx-2">
                        <p
                            className={
                                isFirst
                                    ? 'font-semibold text-sm md:text-lg h-full'
                                    : 'text-base items-end h-full flex'
                            }
                        >
                            {item}
                        </p>
                        {!isLast ? <IoIosArrowForward /> : null}
                    </div>
                );
            })}
        </div>
    );
}
