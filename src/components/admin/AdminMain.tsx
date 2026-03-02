export default function AdminMain({ children }: Readonly<{ children: React.ReactNode }>) {
    return <main className="w-full p-8">
        {children}
    </main>
}