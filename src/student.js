class Mahasiswa {

    getNama(){
        return this.nama
    }

    getNim(){
        return this.nim
    }

    getKelas(){
        return this.kelas
    }

    setNama(nama){
        this.nama = nama
    }

    setNim(nim){
        this.nim = nim
    }

    setKelas(kelas){
        this.kelas = kelas
    }

    data() {
        return {
            nama: this.nama,
            nim: this.nim,
            kelas: this.kelas
        }
    }
}

module.exports = Mahasiswa

let mahasiswa1 = new Mahasiswa
mahasiswa1.setKelas('coba')
mahasiswa1.setNim('coba')
mahasiswa1.setNama('coba')

console.log(mahasiswa1.data())