interface AddProductProps {
    body: { file: File | Blob }; // Đảm bảo body chứa file
}

interface ImageResponse {
    statusCode: number;
    message: string;
    data: {
        filePath: string;
    };
}

export const addThumbnail = async ({ body }: AddProductProps): Promise<ImageResponse> => {
    try {
        const formData = new FormData();
        formData.append('file', body.file);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/file-upload/upload`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        const filePath = `${process.env.NEXT_PUBLIC_API}/${data.data.filePath}`;
        return {
            statusCode: response.status,
            message: 'File uploaded successfully',
            data: {
                filePath: filePath
            }
        };
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};
