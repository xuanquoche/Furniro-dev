interface CustomFetchProps<T> {
    url: string;
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    body?: T;
    token: string;
}

export const customFetchClient = async <T, R = unknown>({
    url,
    method,
    body,
    token
}: CustomFetchProps<T>): Promise<R> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: body ? JSON.stringify(body) : undefined
    });

    if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    return res.json() as Promise<R>;
};
