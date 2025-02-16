'use client';

import { Dispatch, SetStateAction, useRef } from 'react';
import { useController, Control, Path } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { FieldValues } from 'react-hook-form';
import { addImage } from '@/apis/shop';

interface CustomFileInputProps<T extends FieldValues> {
    name: Path<T>;
    label?: string;
    control: Control<T>;
    setShowImage?: Dispatch<SetStateAction<string[]>>;
    setShowThumbnail?: Dispatch<SetStateAction<string>>;
}

export function CustomFileInput<T extends FieldValues>({
    name,
    control,
    label,
    setShowThumbnail,
    setShowImage
}: CustomFileInputProps<T>) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { field } = useController({ name, control });

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const fileArray = Array.from(files);
        const fileUrls = fileArray.map((file) => URL.createObjectURL(file));

        if (name === 'thumbnail') {
            if (setShowThumbnail) {
                const uploadImage = await addImage({ body: { file: fileArray[0] } });
                console.log('image', uploadImage.data.filePath);
                setShowThumbnail(uploadImage.data.filePath);
                field.onChange(uploadImage.data.filePath);
            }
        } else if (name === 'image') {
            const updatedImages = [...(Array.isArray(field.value) ? field.value : []), ...fileUrls];
            field.onChange(updatedImages);
            if (setShowImage) setShowImage(updatedImages);
        }

        console.log('Selected files:', fileArray);
    };

    return (
        <div>
            <div className="flex flex-col gap-2">
                {label && <label className="font-medium">{label}</label>}

                <Input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    multiple={name === 'image'}
                    style={{ display: 'none' }}
                />

                <Button
                    onClick={handleClick}
                    className="bg-background-hover-admin text-background-admin w-28 rounded-xl"
                >
                    {field.value ? 'Change Image' : 'Add image'}
                </Button>
            </div>
        </div>
    );
}
