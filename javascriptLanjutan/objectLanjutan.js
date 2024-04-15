//1 object literal
// let mahasiswa = {
// nama: 'tondi',
// energi: 10,
// makan: function(porsi){
//     this.energi=this.energi+(porsi*5);
    // console.log(`Halo ${this.nama} Selamat Makan!\nEnergi kamu menjadi=${this.energi}`);

// }}

// 2.function declaration

// function Mahasiswa (nama,energi){
// let mahasiswa = {};
// mahasiswa.nama = nama;
// mahasiswa.energi= energi;

// mahasiswa.makan=function(porsi
// ){
// this.energi+=porsi;    
// console.log(`Halo ${this.nama} Selamat makan!`);
// }

// mahasiswa.main=function(jam){
//     this.energi-=jam;
//     console.log(`Halo ${this.nama} \nEnergi kamu menjadi=${this.energi}`);
// }
// return mahasiswa; //penting buat return!

// }

// let tondi = Mahasiswa('tondi',20);

// class Mahasiswa {
//     constructor(nama,nim){
//     this.nama=nama;
//     this.nim=nim;
//     }
    
//     }
    
//     let tondi = new Mahasiswa ('tondi','1');
//     console.table(tondi);
    

//3.constructor function
function Mahasiswa (nama,energi){
    // let mahasiswa = {}; //dihapus kalau disini
    this.nama = nama;
    this.energi= energi;
    
    this.makan=function(porsi
    ){
    this.energi+=porsi;    
    console.log(`Halo ${this.nama} Selamat makan!`);
    }
    
    this.main=function(jam){
        this.energi-=jam;
        console.log(`Halo ${this.nama} \nEnergi kamu menjadi=${this.energi}`);
    }
    // return mahasiswa; //dihapus kalau disini
    
    }
    
    let tondi = new Mahasiswa('tondi',20); // wajib pake new