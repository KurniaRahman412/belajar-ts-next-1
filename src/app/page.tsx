// src/app/page.tsx
import KartuPengantin from "../components/KartuPengantin";
import { dataUndangan } from "../data";

export default function Home() {
    return(
        <main>
            <h1>Undangan Pernikahan</h1>
            <div>
                <KartuPengantin
                label="Mempelai Pria"
                data={dataUndangan.pria}/>
                <KartuPengantin
                label="Mempelai Wanita"
                data={dataUndangan.wanita}/>
            </div>

            <div>
                <h3>Akad Nikah</h3>
                <p>{dataUndangan.akad.tanggal}</p>
                <p>{dataUndangan.akad.lokasi}</p>
            </div>
        </main>
    )
}