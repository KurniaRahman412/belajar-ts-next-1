// src/components/KartuPengantin.tsx
import { Pengantin } from "../types"; // Import interface yang tadi kita buat

// Kita tentukan bahwa komponen ini menerima prop bernama 'data' 
// yang tipenya harus sesuai dengan interface 'Pengantin'
interface Props {
  data: Pengantin;
  label: "Mempelai Pria" | "Mempelai Wanita"; // Ini disebut Literal Type (hanya boleh isi dua teks ini)
}

export default function KartuPengantin({ data, label }: Props) {
  return (
    <div className="p-6 text-center border-2 border-amber-200 rounded-2xl bg-stone-50">
      <span className="text-sm uppercase tracking-widest text-amber-600 font-semibold">
        {label}
      </span>
      <h2 className="text-3xl font-serif mt-2 text-stone-800">{data.namaLengkap}</h2>
      <p className="mt-4 text-stone-600">
        Putra dari Pasangan <br />
        <span className="font-medium">{data.ayah} & {data.ibu}</span>
      </p>
    </div>
  );
}