"use client"

import { useState } from "react"

export default function FormUcapan() {
    const [nama, setNama] = useState<string>("");
    const [pesan, setPesan] = useState<string>("");
    const [status, setStatus] = useState<"Hadir" | "Tidak Hadir">("Hadir");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const ucapanBaru = {
            id: Date.now().toString(),
            nama, pesan, status
        };
        console.log("Mengirim Ucapan : ", ucapanBaru);
        alert("Terima kasih atas ucapannya! :D");

        // Reset Form
        setNama("");
        setPesan("");
    }
    return(
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-xl shadow-xl space-y-4">
            <h3 className="text-xl font-bold text-stone-800">Kirim ucapan & Doa</h3>
            <div>
                <label className="block text-sm font-medium text-stone-700">Nama Anda : </label>
                <input
                type="text"
                value={nama}
                onChange={(e)=> setNama(e.target.value)} required
                className="w-full mt-1 p-2 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-black"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-stone-700">Pesan :</label>
                <input
                type="text"
                value={pesan}
                onChange={(e)=> setPesan(e.target.value)} required
                className="w-full mt-1 p-2 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-black"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-stone-700">Konfirmasi Kehadiran</label>
                <select
                onChange={(e)=> setStatus(e.target.value as "Hadir" | "Tidak Hadir")}
                className="w-full mt-1 p-2 border border-stone-300 rounded-md text-black text-sm">
                    <option value="Hadir">Hadir</option>
                    <option value="Tidak Hadir">Tidak Hadir</option>
                </select>
            </div>
            <button type="submit" className="w-full py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition">Kirim Ucapan</button>
        </form>
    )
}

