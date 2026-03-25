// src/components/Sampul.tsx
"use client";

import { useState } from "react";

interface SampulProps {
    namaPria: string;
    namaWanita: string;
}

export default function Sampul({namaPria, namaWanita}: SampulProps) {
    // useState hanya boleh berisi boolean disini
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [namaTamu, setNamaTamu] = useState<string>("Tamu Undangan")

    if (isOpen) return null; // Komponen hilang jika sudah dibuka

    return(
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-900 text-white p-6 text-center">
            <h2 className="text-xl font-light tracking-[0.3em] mb-4 text-amber-200">UNDANGAN PERNIKAHAN</h2>
            <h1 className="text-5xl font-serif mb-8"> {namaPria} & {namaWanita}</h1>

            <h3 className="text-md pb-4 text-slate-400">{namaTamu}</h3>
            <button
            onClick={()=> setIsOpen(true)}
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 transition-colors rounded-full font-medium"
            >Buka Undangan</button>
        </div>
    )
}