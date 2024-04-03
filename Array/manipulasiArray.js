// Manipulasi array

// 1 . Menambahkan isi array

// var binatang = [];
// binatang[0] = 'kucing';
// binatang[1] ='sapi';
// binatang[2] = 'kelinci';
// binatang[3] = 'koala';

// console.log(binaytang);

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


// var binatang = ['kucing' , 'sapi' , 'kelinci' , 'panda' , 'koala'];
//    1. Join                          ------>menggabungkan semua elemen  
// console.log(binatang.join(' - '));

//    2. Push and Pop
//  binatang.push('kambing','semut','jerapah'); //-----> MENAMBAHKAN elemen TERAKHIR

//  binatang.pop();             
//  binatang.pop();         //-----> MENGHAPUS elemen TERAKHIR
//  console.log(binatang.join(' - '));

//  3. unshift dan shift
//    binatang.unshift('ulat'); // ----> MENAMBAHKAN elemen PERTAMA (Unshift)
    
   // binatang.shift();
   // console.log(binatang.join(' - ')); // ----> MENGHAPUS elemen PERTAMA

//   4. slice and splice
// //    splice(indexAwal, mauDihapusBerapa,elemenBaru1, elemenBaru2)
// binatang.splice(1,1,'kecoa','angsa');
// console.log(binatang.join(' - '));

//    5.Slice
// slice(awal,akhir);

// var binatang = ['kucing' , 'sapi' , 'kelinci' , 'panda' , 'koala'];
// var binatang2 = binatang.slice(2,3);
// console.log(binatang2.join(' - '));
// console.log(binatang.join(' - '));


//6. foreach
   var angka = [1,2,3,4,5,6,7,8,9];
   var nama = ['tondi','putra','nafis'];
   // for (var i = 0; i<angka.length;i++){
   //    console.log(angka[i]);
   // }
//    var cetak = function(e){
//       console.log(e);
//    }
// angka.forEach(cetak);

// angka.forEach(function(e){
//       console.log(e);
//    });

// nama.forEach(function(e,i){
//       console.log('mahasiswa ke- '+ (i+1) +' adalah '+e);

//    });

// var angka2 = [1,2,4,2,1,5];
// var angka3 = angka2.map(function(e)
// {
//    return e*2;
// }
// );
// console.log(angka3.join(' - '));

var angka = [1,2,8,3,10,7,20,12];
angka.sort(function(a,b){
   return a-b;
});
console.log(angka);


























