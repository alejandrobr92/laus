import EventsList from "@/components/admin/events/EventsList";
import { getDb } from "../../../mongodb";

const collection = (await getDb()).collection("events");
const events = (await collection.find({}).toArray()).map(event => ({
    ...event,
    id: event._id.toString(),
    date: event.date?.toISOString() || ''
}));

export default function Events() {
    return <div className="bg-mauve-500 p-12">
        <EventsList events={events} />
    </div>
};