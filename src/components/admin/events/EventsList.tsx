import { Event } from "@/types";
import Image from "next/image";
import { JSX } from "react";

type EventsListProps = {
    events: Event[];
}

export default function EventsList({ events }: EventsListProps): JSX.Element {
    return (<div className="flex gap-y-6 gap-x-6 flex-wrap justify-around">
        {events?.map(event => <div key={event.id} className="h-96 border-mauve-400 w-1/1 xl:w-[48%] flex-grow hover:scale-103 duration-300 shadow-2xl">
            <div
                className=" h-[80%] p-4 shadow-lg relative" >
                {event.image && <Image src={event.image} fill style={{ objectFit: 'cover', /*borderRadius: '8px 8px 0 0'*/ }} alt="" />}
            </div >
            <div className="flex flex-col items-center justify-center h-[20%]">
                <p className="text-2xl font-bold">{event.artist}</p>
                <p className="text-lg">{event.venue}</p>
            </div>
        </div >)
        }
    </ div >);
}