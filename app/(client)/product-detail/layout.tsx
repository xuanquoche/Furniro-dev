export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <main className="w-full">
                <div className="w-full bg-white ">{children}</div>
            </main>
        </div>
    );
}
