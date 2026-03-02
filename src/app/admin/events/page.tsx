import EventsList from "@/components/admin/events/EventsList";
import Link from "next/link";
import { getDb } from "../../../../mongodb";

export default async function Events() {

    const collection = (await getDb()).collection("events");
    const events = (await collection.find({}).sort({ date: -1 }).toArray()).map(event => ({
        ...event,
        id: event._id.toString(),
        date: event.date?.toISOString() || ''
    }));


    return <div className="w-full flex flex-col gap-16">
        {/*  <div>
            <Link href="/admin/events/new" className="p-2 border border-sky-800 rounded-md">Add Event</Link>
        </div> */}
        <EventsList events={events} />
    </div>
};