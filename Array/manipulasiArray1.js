// Menambahkan Isi Array
// var binatang = [];
// binatang [0] = 'ayam';
// binatang[1]= 'kucing';
// binatang [2]= 'burung';
// console.log(binatang);

//menghapus isi array
// var binatang = [];
// binatang = ['ayam','kucing','burung','sapi'];
// binatang [2] = 'semut';
// console.log(binatang);

//menampilkan isi array
// var binatang = [];
// binatang = ['ayam','kucing','burung','sapi'];
// for(var i=0;i<binatang.length;i++)
// {
//     console.log('binatang '+i+':'+binatang[i]);
// }

//method pada array
var binatang = [];
binatang = ['ayam','kucing','burung','sapi'];
// console.log(binatang.join(' - '));
binatang.push('ikan','tupai','angsa');
// // console.log(binatang);
// binatang.pop();
// binatang.pop();
// console.log(binatang.join(' - '));
binatang.unshift('kecoa','gajah');
console.log(binatang.join(' - '));
binatang.shift();
console.log(binatang.join(' - '));

