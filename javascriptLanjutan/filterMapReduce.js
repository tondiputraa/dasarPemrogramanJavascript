// const angka = [-1,8,9,1,4,-5,-4,3,2,9];
//mencari angka>=3

// //for
// let newAngka =[];

// for(var i=0;i<=angka.length;i++){
//     if(angka[i]>=3){
//         newAngka.push(angka[i]);
//     }
// }
// console.log(angka.sort());
// console.log(newAngka.sort());

//filter
// const newAngka = angka.filter(function(a){
// return a>=3;
// });

// // filter versi singkat menggunakan arrow function
// const newAngka = angka.filter((a)=>a>=3);
// console.log(newAngka.sort());

//map
// const newAngka = angka.map(a=>a*2);
// console.log(angka);
// console.log(newAngka);


// method chainning
// cari angka >5 --> filter
// kalikan 3    --> map
// jumlahkan --> reduce

const angka = [-1,8,9,1,4,-5,-4,3,2,9];
const newAngka = angka.filter(a=>a>5)//bukan titik koma tapi dipisahkan pakai titik (.) //8 9 9
.map(a=>a*3)    // 24 27 27
.reduce((acc,curr)=>acc+curr); //51 27 //78

console.log(newAngka);


