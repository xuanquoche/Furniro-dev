'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormItem, FormLabel, FormControl, FormMessage, FormField } from '@/components/ui/form';
import { Control, FieldValues, FieldPath } from 'react-hook-form';
import { Textarea } from '../ui/textarea';

interface TextAreaFieldProps<T extends FieldValues> {
    label: string;
    name: FieldPath<T>;
    control: Control<T>;
    placeholder?: string;
    type?: string;
    isPasswordField?: boolean;
    className?: string;
    defaultValue?: any;
}

const TextAreaField = <T extends FieldValues>({
    label,
    name,
    control,
    placeholder,
    className,
    defaultValue
}: TextAreaFieldProps<T>) => {
    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem className={`dark:bg-form-foreground ${className}`}>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <div className="relative">
                            <Textarea
                                placeholder={placeholder || 'Type product descrption here ...'}
                                className="resize-none rounded-xl bg-primary-admin"
                                {...field}
                                value={field.value ?? defaultValue}
                            />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default TextAreaField;
