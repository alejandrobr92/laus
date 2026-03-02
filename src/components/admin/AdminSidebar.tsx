import Link from "next/link";

export default function AdminSidebar() {
    return <aside className="w-1/5 bg-mauve-700 py-8 px-6 flex flex-col gap-6 ">
        <h2 className="text-3xl">{"Lau's"}</h2>
        <ul>
            <li className="my-2">
                <Link href="/admin/events">Events</Link>
            </li>
            <li className="my-2">
                <Link href="/admin/events/new">Add Event</Link>
            </li>
        </ul>
    </aside>
};