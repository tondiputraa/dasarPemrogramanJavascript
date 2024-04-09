//membuat object
// 1. object literal
var mhs1 = {
    nama: 'tondi',
    nim: '1607112000',
    email: 'tondiputra02@gmail.com',
    jurusan: 'Teknik Informatika'
   }

   var mhs2 = {
    nama: 'putra',
    nim: '1607112001',
    email: 'putra02@gmail.com',
    jurusan: 'Teknik Industri'
   }

//2. function declaration
function buatObjectMhs(nama,nim,email,jurusan){
var mhs = {};
mhs.nama = nama;
mhs.nim = nim;
mhs.email= email;
mhs.jurusan= jurusan;
return mhs
}

var mhs3 = buatObjectMhs('nafis', '1607112022', 'nafismubarak@gmail.com', 'Teknik Elektro');

//3. constructor
function Mahasiswa (nama,nim,email,jurusan){
this.nama=nama;
this.nim=nim;
this.email=email;
this.jurusan=jurusan;
}

var mhs4 = new Mahasiswa('Rosa','1607112004','rosa@gmail.com','Manajemen Informatika');