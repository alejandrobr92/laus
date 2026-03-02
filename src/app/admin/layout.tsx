import AdminMain from "@/components/admin/AdminMain";
import AdminSidebar from "@/components/admin/AdminSidebar";
import type { ReactNode } from "react";

type AdminLayoutProps = {
    children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div className="flex min-h-screen w-full bg-mauve-800 text-mauve-300">
            <AdminSidebar />
            <AdminMain>{children}</AdminMain>
        </div>
    );
}
