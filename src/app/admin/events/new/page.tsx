"use client"
import { useActionState } from "react";
import { ActionState, saveEvent } from "@/actions";
import EventInput from "@/components/admin/events/new/EventInput";
import EventSelect from "@/components/admin/events/new/EventSelect";
import { zone, format, status } from "@/constants";
import ImagePicker from "@/components/admin/events/new/ImagePicker";


const initialState: ActionState = { success: false };

export default function AddEvent() {


    const [state, action, pending] = useActionState(saveEvent, initialState);


    return (<div className="flex flex-col gap-8">
        <h2 className="text-2xl">New Event</h2>
        <form action={action} className="grid grid-cols-2 grid-flow-row items-start gap-4 gap-x-12">
            <EventInput name="artist" type="text" />
            <EventInput name="venue" type="text" />
            <EventInput name="capacity" type="number" />
            <EventInput name="date" type="date" />
            <EventInput name="link" type="url" />
            <EventSelect name="zone" options={zone} />
            <EventSelect name="format" options={format} />
            <EventSelect name="status" options={status} />
            <ImagePicker />

            {/*  <label htmlFor="image">Image</label>
            <input name="image"></input> */}
            <button type="submit" className="w-1/2 justify-self-end self-end col-start-2 border border-mauve-200 rounded-lg p-2 mt-8 hover:cursor-pointer">{pending ? "Saving" : "Save Event"}</button>
        </form>
    </div>)
}