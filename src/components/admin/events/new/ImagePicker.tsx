'use client'

import Image from "next/image";
import { ChangeEvent, JSX, useRef, useState } from "react";

export default function ImagePicker(): JSX.Element {
    const ref = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<ArrayBuffer | string | null>();

    const handleButton = () => {
        ref?.current?.click();
    };

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const imageFile = e.target.files?.[0];
        if (!imageFile) return;
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setImage(fileReader.result);
        }
        fileReader.readAsDataURL(imageFile);
    }

    return <>
        <input onChange={handleImage} name="image" ref={ref} className="hidden" type="file" accept="image/jpg image/webp image/avif" />
        <div className="flex flex-col w-1/1 gap-8">
            <button onClick={handleButton} type="button" className="hover:cursor-pointer h-10 p-2 rounded-sm mt-4 border border-mauve-600">Choose Image</button>
            <div className="w-full lg:w-80 h-50 relative self-center">
                {image && typeof image === 'string' && <Image src={image} fill style={{ objectFit: "contain" }} alt="" />}
            </div>
        </div>

    </>
};