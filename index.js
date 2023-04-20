const promptSync = require('prompt-sync');
const prompt = promptSync()
const Mahasiswa = require('./src/student')
const { luasLingkaran,
    luasPersegi,
    luasSegitiga,
    kelilingLingkaran,
    kelilingPersegi,
    kelilingSegitiga
} = require('./src/shape')

let mahasiswaArr = []

main = true
while(main){
    
    let menu = parseInt(prompt(console.log(`
    Pilih aplikasi
        1. Aplikasi Geometri
        2. Aplikasi Mahasiswa
        3. Exit
    `)))
    
    if (menu === 1){
        let menuGeometri = parseInt(prompt(console.log(`
    Mau hitung apa?
        1. Hitung luas persegi
        2. Hitung luas segitiga
        3. Hitung luas lingkaran
        4. Hitung keliling lingkaran
        5. Hitung keliling persegi
        6. Hitung keliling segitiga
        `)))
        if (menuGeometri === 1){
            let s = parseInt(prompt('Masukkan Sisi = '))
            console.log(luasPersegi(s))
        } else if (menuGeometri === 2){
            let a = parseInt(prompt('Masukkan Alas = '))
            let t = parseInt(prompt('Masukkan Tinggi = '))
            console.log(luasSegitiga(a, t))
        } else if (menuGeometri === 3){
            let r = parseInt(prompt('Masukkan jari-jari = '))
            console.log(luasLingkaran(r))
        } else if (menuGeometri === 4){
            let r = parseInt(prompt('Masukkan jari-jari = '))
            console.log(kelilingLingkaran(r))
        } else if (menuGeometri === 5){
            let s = parseInt(prompt('Masukkan sisi = '))
            console.log(kelilingPersegi(s))
        } else if (menuGeometri === 6){
            let s1 = parseInt(prompt('Masukkan sisi 1 = '))
            let s2 = parseInt(prompt('Masukkan sisi 2 = '))
            let s3 = parseInt(prompt('Masukkan sisi 3 = '))
            console.log(kelilingSegitiga(s1,s2,s3))
        } else {
            console.log('Salah input')
        }
    } else if (menu === 2){
        let menuMahasiswa = parseInt(prompt(console.log(`
        1. Input data baru
        2. Lihat data mahasiswa
        `)))
        if (menuMahasiswa === 1){
            ulang = true
            while(ulang){
                let mahasiswa = new Mahasiswa
                mahasiswa.setNama(prompt('Masukkan nama = '))
                mahasiswa.setKelas(prompt('Masukkan kelas = '))
                mahasiswa.setNim(prompt('Masukkan nim = '))
                mahasiswaArr.push(mahasiswa.data())
                lanjut = prompt('Masukkan data lagi? (y/t)')
                if(lanjut === 't'){
                    ulang = false
                }
            }
        } else if (menuMahasiswa === 2){
            console.log(mahasiswaArr)
        }
    } else if(menu === 3) {
        main = false
    }
    else {
        console.log('Salah input')
    }
}