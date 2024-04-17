// const perkenalan = ['halo','nama','saya','tondi putra'];
// const [salam,satu,dua,nama]=perkenalan;


//skipping item
// const [salam,,,nama]=perkenalan;

// swapp items

// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// //tukar item
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

//return value pada function
// function coba(){
//     return [1,2];
// }
// let [a,b] = coba();
// console.log(a);

//rest parameter

// const[a,...values]=[1,2,3,4,5,6];
// console.log(a);
// console.log(values);
// console.log(values[0]);

// Destructuring Objek
// const mhs = {
//     nama: 'tondi putra',
//     umur:26
// }

// let {nama,umur} = mhs; // nama properti tidak boleh beda
// console.log(nama);

// Assigment tanpa deklarasi object

// ({nama,umur} =  {          // 1
//     nama: 'tondi putra',
//     umur:26
// }); // pakai kurung         1
// console.log(nama);

// Assign ke variable baru
// const mhs = {
//     nama: 'tondi putra',
//     umur:26
// }

// let {nama: n ,umur: u} = mhs; // nama properti boleh beda dengan kasih ':'
// console.log(n);

// Memberi nilai deafult 
// const mhs = {
//     nama: 'tondi putra',
//     umur:26,
//     // email:'tondiiputra@gmail.com'
// }

// let {nama: n ,umur: u, email: e='deafult@email.com'} = mhs;
// console.log(n);
// console.log(u);
// console.log(e);

// rest parameter
// const mhs = {
//     nama: 'tondi putra',
//     umur:26,
//     email:'tondiiputra@gmail.com'
// }

// let {nama,...values} = mhs;
// console.log(values)

// Mengambil field pada objek,setelah dikiri sebagai parameter untuk function
// const mhs = {
//     id:123,
//     nama: 'tondi putra',
//     umur:26,
//     email:'tondiiputra@gmail.com'
// }

// function getIdMhs(mhs){
//     return mhs.id;
// }

// console.log(getIdMhs(mhs));

const mhs = {
    id:123,
    nama: 'tondi putra',
    umur:26,
    email:'tondiiputra@gmail.com'
}

function getIdMhs({id}){
    return id;
}

console.log(getIdMhs(mhs));




