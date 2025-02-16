'use client';

import { FormItem, FormLabel, FormControl, FormMessage, FormField } from '@/components/ui/form';
import { Control, FieldValues, FieldPath } from 'react-hook-form';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from '../ui/select';

interface SelectFieldProps<T extends FieldValues> {
    label: string;
    name: FieldPath<T>;
    control: Control<T>;
    placeholder?: string;
    className?: string;
    options: Record<string, string | number>;
    value?: string;
}

const SelectField = <T extends FieldValues>({
    label,
    name,
    control,
    placeholder,
    options,
    value
}: SelectFieldProps<T>) => {
    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem className="dark:bg-form-foreground">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Select onValueChange={field.onChange} value={field.value?.toString()}>
                            <SelectTrigger>
                                <SelectValue placeholder={placeholder || 'Select an option'} />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                {Object.keys(options)
                                    .filter((key) => isNaN(Number(key)))
                                    .map((key) => (
                                        <SelectItem
                                            key={key}
                                            value={
                                                value ? value.toString() : options[key].toString()
                                            }
                                        >
                                            {key}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default SelectField;
