// //4.object create();

//const namaObject ={preperti:blabala,properti2:blabla...};---->rumus const
//     const methodMahasiswa ={
//     makan:function(porsi)
    
//     {
//     this.energi+=porsi;    
//     console.log(`Halo ${this.nama} Selamat makan!`);
//     },
    
//     main:function(jam){
//         this.energi-=jam;
//         console.log(`Halo ${this.nama} \nEnergi kamu menjadi=${this.energi}`);
//     },

//     tidur:function(jam){
// this.energi=+jam*2;
// console.log(`Halo ${this.nama} Selamat Tidur! \nEnergi kamu menjadi=${this.energi}`);

//     }
// };


//     function Mahasiswa (nama,energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi= energi; 
    
//     return mahasiswa; 
//     }
    
//     let tondi = new Mahasiswa('tondi',20); // wajib pake new




           class Mahasiswa{
                constructor(nama, energi){
                    this.nama=nama;
                    this.energi=energi;
                }
                makan(porsi){
                    this.energi+=porsi;
                    return `Selamat makan ${this.nama} energi kamu menjadi ${this.energi}`;

                }
                main(jam){
                    this.energi+=jam;
                    return `Selamat makan ${this.nama} energi kamu menjadi ${this.energi}`;
                    
                }
                tidur(jam){
                    this.energi+=jam*2;
                    return `Selamat makan ${this.nama} energi kamu menjadi ${this.energi}`;
                    
                }

                }


                let tondi = new Mahasiswa ('tondi',20);



    
    // wajib pake new
// const methodMahasiswa = {
// makan:function (porsi){
//     this.energi=+porsi;
//     console.log(`Selamat makan ${this.nama} energi kamu menjadi ${this.energi}`);
//     },
// main:function(jam){
//     this.energi=-jam;
//     console.log(`Selamat bermain ${this.nama} energi kamu menjadi ${this.energi}`);

// },
// tidur:function (jam) {
// this.energi=-jam*2;
// console.log(`Selamat tidur ${this.nama} energi kamu menjadi ${this.energi}`);


// }

// };

// function Mahasiswa (nama,energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }

// let tondi = new Mahasiswa ('tondi',20);

// const methodMahasiswa = {
//     makan:function(porsi){
//         this.energi+=porsi;
//     },

//     main:function (jam){
//         this.energi-=jam;

//     },

//     tidur:function(jam){
//         this.energi+=jam*2;
//     }


// };
// function Mahasiswa (nama,energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama=nama;
//     mahasiswa.energi=energi;
//     return mahasiswa;
// }

// let tondi = new Mahasiswa ('tondi',2);








