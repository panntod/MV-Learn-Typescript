let murid: string[];                        // ['Rivaldo', 'Pandhu', 'Rizky']
let data: [string, number, boolean];        // ['Rivaldo', 20, false]

enum Warna {                                // Enumerasi
    Merah = 1,
    Hijau = 2,
    Biru = 3
}

let guru = {                                // Object
    nama: 'Rivaldo',
    umur: 20,
    sudahMenikah: false,
    anak: null,
    alamat: undefined
}

let nilai: string | number | boolean;       // Union

let dataSiswa: string & number & boolean;   // Intersection