export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <main className="w-full px-6">
                <div className="w-full bg-primary-admin px-6 pb-6">{children}</div>
            </main>
        </div>
    );
}
