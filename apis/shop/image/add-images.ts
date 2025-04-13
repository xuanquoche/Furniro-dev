interface AddProductProps {
    body: { file: File[] | Blob[] | string[] };
}

interface ImageResponse {
    statusCode: number;
    message: string;
    data: {
        filePath: string[];
    };
}

export const addImage = async ({ body }: AddProductProps): Promise<ImageResponse> => {
    try {
        const formData = new FormData();
        body.file.forEach((file) => {
            formData.append('files', file);
        });
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/file-upload/upload-multiple`,
            {
                method: 'POST',
                body: formData
            }
        );

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        const filePath = data?.data?.filePaths.map((path: string) => path);
        return {
            statusCode: response.status,
            message: 'File uploaded successfully',
            data: {
                filePath: filePath
            }
        };
    } catch (error) {
        console.error('Error adding images:', error);
        throw error;
    }
};
