// //destruction object

// function kalkulasi (a,b){
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }

// const {tambah,kurang,bagi,kali} = kalkulasi(2,3);
// console.log(tambah);

//destruction function arguments
// const mhs1 = {
//     nama:'Tondi Putra',
//     nim: '12345',
//     email: 'tondiiputra@gmail.com',
//     nilai:{
//         tugas:90,
//         uts:85,
//         uas:88
//     }
// }

// function cetakMhs({nama,nim,nilai:{tugas,uts,uas}}){
//     return `Halo, nama saya ${nama} nim saya ${nim} dan nilai uas saya ${uas}`
// }

// console.log(cetakMhs(mhs1));

const mhs1 = {
    nama:'Tondi Putra',
    nim: '12345',
    email: 'tondiiputra@gmail.com',
    nilai:{
       kalkulus:{
        tugasKal:90,
        utsKal:85,
        uasKal:88
       },
       RPL: {
        tugasRPL:92,
        utsRPL:87,
        uasRPL:78
       }
    }
}

function cetakMhs({nama,nim,nilai:{kalkulus,RPL:{tugasRPL,utsRPL,uasRPL}}}){
    return `Halo, nama saya ${nama} nim saya ${nim} dan nilai uas RPL saya ${uasRPL}`
}

console.log(cetakMhs(mhs1));