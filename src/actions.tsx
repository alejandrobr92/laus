"use server"

import fs from 'fs';
import { redirect } from "next/navigation";
import { getDb } from "../mongodb";
import { revalidatePath } from "next/cache";
import { Event } from "./types";

export type ActionState = {
    success: boolean;
}

export async function saveEvent(prevState: ActionState, formData: FormData) {

    if (!formData.get('name')) return { success: false };

    // await new Promise((resolve) => setTimeout(() => resolve(''), 2000));

    const imgExt = (formData?.get('image') as File).name.split('.')[1];

    const fileName = `${formData.get('artist')}${formData.get('venue')}.${imgExt}`;
    const bufferedImage = await (formData.get('image') as File)?.arrayBuffer();
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    stream.write(Buffer.from(bufferedImage))

    const event: Partial<Event> = {
        artist: formData.get('artist') as string,
        venue: formData.get('venue') as string,
        capacity: formData.get('capacity') as string,
        status: formData.get('status') as string,
        zone: formData.get('zone') as string,
        format: formData.get('format') as string,

    };

    event.date = new Date(`${formData.get("date")}T00:00:00.000Z`)
    event.image = `/images/${fileName}`;
    const collection = (await (getDb())).collection('events');


    collection.insertOne(event);

    prevState.success = true;

    revalidatePath("/admin/events");
    redirect("/admin/events");
}