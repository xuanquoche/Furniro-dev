'use client';

import { useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from '@/components/ui/form';
import { Control, FieldValues, FieldPath } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useClickOutside } from '../../hooks/use-click-outside';

interface CustomColorPickerProps<T extends FieldValues> {
    label: string;
    name: FieldPath<T>;
    control: Control<T>;
    className?: string;
}

const CustomColorPicker = <T extends FieldValues>({
    label,
    name,
    control,
    className
}: CustomColorPickerProps<T>) => {
    const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useClickOutside(ref, () => {
        setIsPickerVisible(false);
    });

    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem className="relative dark:bg-form-foreground">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder={label}
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                className={cn('pr-10 cursor-pointer', className)}
                                onClick={() => setIsPickerVisible((prev) => !prev)}
                            />
                            <div
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border cursor-pointer"
                                style={{ backgroundColor: field.value }}
                                onClick={() => setIsPickerVisible((prev) => !prev)}
                            />
                        </div>
                    </FormControl>
                    <FormMessage />

                    {isPickerVisible && (
                        <div
                            className="absolute z-10 mt-2 p-2 bg-white shadow-lg rounded-md border dark:bg-gray-800"
                            ref={ref}
                        >
                            <HexColorPicker color={field.value} onChange={field.onChange} />
                        </div>
                    )}
                </FormItem>
            )}
        />
    );
};

export default CustomColorPicker;
