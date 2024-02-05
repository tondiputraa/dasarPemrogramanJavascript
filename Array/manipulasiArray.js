// Manipulasi array

// 1 . Menambahkan isi array

// var binatang = [];
// binatang[0] = 'kucing';
// binatang[1] ='sapi';
// binatang[2] = 'kelinci';
// binatang[3] = 'koala';

// console.log(binatang);

// Menghapus Isi Array

// var binatang = ['kucing' , 'sapi' , 'kelinci' , 'panda' , 'koala'];
// binatang[2]='naga';

// console.log(binatang);

// 3 . Menampilkan isi Array

// var binatang = ['kucing' , 'sapi' , 'kelinci' , 'panda' , 'koala','ular'];

// for (var i=0; i<binatang.length;i++) {
//     console.log('Binatang '+(i+1)+': ' +binatang[i])
// }


// 4. Method Pada Array:


var binatang = ['kucing' , 'sapi' , 'kelinci' , 'panda' , 'koala'];
//    1. Join                          ------>menggabungkan semu elemen  
// console.log(binatang.join(' - '));

//    2. Push and Pop
//  binatang.push('kambing','semut','jerapah'); //-----> MENAMBAHKAN elemen TERAKHIR

//  binatang.pop();             
//  binatang.pop();         //-----> MENGHAPUS elemen TERAKHIR
//  console.log(binatang.join(' - '));

//  3. unshift dan shift
//    binatang.unshift('ulat'); // ----> MENAMBAHKAN elemen PERTAMA (Unshift)
    
   binatang.shift();
   console.log(binatang.join(' - ')); // ----> MENGHAPUS elemen PERTAMA





























