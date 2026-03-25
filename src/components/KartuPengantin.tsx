// src/components/KartuPengantin.tsx
import { Pengantin } from "../types";

interface Props {
    data: Pengantin;
    label: "Mempelai Pria" | "Mempelai Wanita";
}

export default function KartuPengantin({data, label}: Props) {
    return(
        <div className="">
            <span className="">{label}</span>
            <h2 className="">{data.namaLengkap}</h2>
            <p className="">Putra dari pasangan <br/> <span>{data.ayah} & {data.ibu}</span></p>
        </div>
    );
}