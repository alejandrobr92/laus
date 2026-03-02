import { capitalize } from "@/utils";
import React from "react";

type EventInputProps = {
    name: string;
    type: string;
}

export default function EventInput({ type, name }: EventInputProps): React.ReactElement {
    return (<div className="flex flex-col w-1/1 gap-2">
        <label htmlFor={name} className="">{capitalize(name)}:</label>
        <input id={name} type={type} name={name} className="h-10 p-2 border border-mauve-600 rounded-sm focus:outline-none"></input>
    </div>)

}