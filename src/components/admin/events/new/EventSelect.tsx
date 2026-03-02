import { capitalize } from "@/utils";

type EventSelectProps = {
    name: string;
    options: string[];
}

export default function EventSelect({ name, options }: EventSelectProps): React.ReactElement {
    return (<div className="flex flex-col w-1/1 gap-2">
        <label htmlFor={name}>{capitalize(name)}:</label>
        <select name={name} className="h-10 p-2 focus:outline-none border border-mauve-600 rounded-lg">
            <option value="">Select one</option>
            {options.map(option => <option value={option} key={option}>{capitalize(option)}</option>)}
        </select>
    </div>)

}