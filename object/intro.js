//membuat Object
var mhs = {
    nama: 'tondi',
    umur: 26,
    ips: [3.20,3.50,3.90,3.00],
    alamat: {
        jalan:'Jl. Melati No.123',
        kota:'Pekanbaru',
        provinsi: 'Riau'
    }
    ,
    sapa: function(){
        return'Hi, Nama saya '+this.nama+' Usia saya '+this.umur+' dan saya tnggal di '+this.alamat;
    }
}