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
        for (const pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/file-upload/upload`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        const filePath = data.data.filePath.map(
            (path: string) => `${process.env.NEXT_PUBLIC_API}/${path}`
        );
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
