"use client"

import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Ucapan } from "../types";

export default function DaftarUcapan() {
    const [listUcapan, setListUcapan] = useState<Ucapan[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const ambilData = useCallback (async () => {
        const {data, error} = await supabase
        .from("Ucapan")
        .select("*")
        .order("created_at", {ascending: false}) // urutkan dari yang terbaru

        if (!error && data){
            setListUcapan(data as Ucapan[]);
        }
        setLoading(false)
    }, []);

    // jalankan fungsi saat komponen pertama kali muncul
    useEffect(()=> {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        ambilData();
    }, [ambilData]);

    if (loading) return <p className="text-stone-500">Memuat ucapan...</p>;

    return(
        <div className="w-full max-w-md mt-8 space-y-4">
            <h3 className="text-xl font-bold text-stone-800">Buku Tamu</h3>
            
            <div className="max-h-96 overflow-y-auto space-y-3 pr-2">
                {listUcapan.map((item) => (
                    <div key={item.id} className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-amber-500">
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="font-bold text-stone-900">{item.nama}</h4>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                                item.status === "Hadir" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                            }`}>{item.status}</span>
                        </div>
                        <p className="text-stone-600 text-sm italic">{item.pesan}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}