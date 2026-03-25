export interface Pengantin {
    namaLengkap: string;
    namaPanggilan: string;
    ayah: string;
    ibu: string;
}

export interface Acara {
    tanggal: string;
    jam: string;
    lokasi: string;
    mapUrl: string;
}

export interface UndanganData {
    pria: Pengantin;
    wanita: Pengantin;
    akad: Acara;
    resepsi: Acara;
    quotes?: string;
}