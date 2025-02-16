export default function ProductListLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full">
            <h2 className="text-xl font-semibold mb-2">Product</h2>
            {children}
        </div>
    );
}
