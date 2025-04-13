import { Control, FieldValues, Path } from 'react-hook-form';
import { Button } from './button';
import { FormField } from '../ui/form';

type QuantityInputProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
};

const QuantityInput = <T extends FieldValues>({ control, name }: QuantityInputProps<T>) => {
    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <div className="flex items-center border rounded-xl p-2 gap-2 w-fit max-w-[122px]">
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => field.onChange(Math.max(1, field.value - 1))}
                        className="px-3 text-lg"
                    >
                        -
                    </Button>
                    <span className="w-6 text-center">{field.value}</span>
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => field.onChange(field.value + 1)}
                        className="px-3 text-lg"
                    >
                        +
                    </Button>
                </div>
            )}
        />
    );
};

export default QuantityInput;
