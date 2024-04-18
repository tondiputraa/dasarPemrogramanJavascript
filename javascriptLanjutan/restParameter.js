// function myfunc() {
//return`a = ${a} myArgs = ${myArgs}`;
// return myArgs;
// return Array.from(arguments);
// return [...arguments];
// }

// console.log(myfunc(1,2,3,4,5));
// function jumlah(...angka){
// //     let total = 0;

// //  for (const a of angka) {
// //     total+=a;    
// //  }
// //  return total;
// return angka.reduce((a,i)=>a+i);
// }

// console.log(jumlah(1,2,3,4,5));

//array destructuring

// const kelompok1 = ['tondi','putra','nafis','mubarak','dian'];
// const [ketua,wakil,...anggota] = kelompok1;

//  console.log(anggota);
//  console.log(ketua);

// const team = {
//     pm: 'tondi',
//     frontEnd1:'putra',
//     frontEnd2:'nafis',
//     backend1:'mubarak',
//     ux:'dian',
//     defOps:'vins'

// }


// const {pm, ...myTeam} = team;
// console.log(myTeam);

//filtering

function filterBy (type, ...values){
    return values.filter(v=> typeof v===type)
}

console.log(filterBy('number',1,2,'tondi',true,'putra',10,false));