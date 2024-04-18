//for ... of

// const mhs = ['tondi','putra','nafis'];

// for(let i=0;i<=mhs.length;i++){
//     console.log(mhs[i]);
// }

//foreach

// mhs.forEach(m=>{console.log(m)});

//for ... of
// for (let m of mhs){ console.log(m)};

//string
// const nama = 'tondi';
// for(let n of nama){
//     console.log(n);
// }

const mhs = ['tondi','putra','nafis'];
// mhs.forEach((m,i)=>{                                                         
//     console.log(`${m} adalah mahasiswa ke ${i+1}`)
// });

// for (const m of mhs) {
//     console.log(m)    
// }

// ------------------>

// for (const [i,m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke ${i+1}`)
// }

///////////////////////////////////////////////////////////////////////


//node list
// const liNama = document.querySelectorAll('.nama');
// // console.log(liNama);
// // liNama.forEach(n=>console.log(n.innerHTML));
// for (const n of liNama) {
//     console.log(n.innerHTML);                           //innerHTML/textcontent penting pada nodelist
// }


//arguments
// function jumlahKanAngka(){
//     let jumlah =0;
//     for (const j of arguments) {
//         jumlah+=j;
        
//     }
//     return jumlah;
// }

// console.log(jumlahKanAngka(1,2,3,4,5));

const mhs1 = {
    nama:'tondi',
    nim:'1234',
    email:'tondiputra02@gmail.com'
}

for (const m in mhs1) {
    console.log(mhs1[m]);
}




















