// src/app/page.tsx
import KartuPengantin from "../components/KartuPengantin";
import { dataUndangan } from "../data";
import Sampul from "../components/Sampul";
import FormUcapan from "../components/KartuUcapan";
import DaftarUcapan from "../components/DaftarUcapan";


export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 p-8 flex flex-col items-center gap-8">
        <Sampul
        namaPria={dataUndangan.pria.namaPanggilan}
        namaWanita={dataUndangan.wanita.namaPanggilan}
        />
      <h1 className="text-4xl font-serif text-stone-900 mb-8">Undangan Pernikahan</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Panggil komponen KartuPengantin */}
        <KartuPengantin 
          label="Mempelai Pria" 
          data={dataUndangan.pria} 
        />
        
        <KartuPengantin 
          label="Mempelai Wanita" 
          data={dataUndangan.wanita} 
        />
      </div>

      <div className="mt-12 p-6 bg-white rounded-xl shadow-md text-center">
        <h3 className="font-bold text-amber-700">Akad Nikah</h3>
        <p className="text-black pt-2">{dataUndangan.akad.tanggal}</p>
        <p className="text-black">{dataUndangan.akad.lokasi}</p>
      </div>

      <div>
        <FormUcapan/>
        <DaftarUcapan/>
      </div>
    </main>
  );
}