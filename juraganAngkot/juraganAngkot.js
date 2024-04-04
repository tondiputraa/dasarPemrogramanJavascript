var penumpang = ['tondi','putra',undefined,'dian'];
var tambahPenumpang = function (namaPenumpang, penumpang)
{
    //Jika angkot kosong
    if (penumpang.length==0)
    {
        //Tambah penumpang diawal awrray
        penumpang.push(namaPenumpang);
        //Kembalikan isi Array dan keluar dari function
        return penumpang;    
    }
        //else
        else
        {
            //Telusuri Seluruh Kursi dari Awal
            for (var i=0;i<penumpang.length;i++){
                //Jika ada kursi kosong
                if (penumpang[i]==undefined){
                    // Tambah penumpang di kursi tersebut
                    penumpang[i]=namaPenumpang;
                    // Kembalikan isi array dan keluar dari function
                    return penumpang;
                
            }
            //jima sudah ada nama yang sama
        else if(penumpang[i]==namaPenumpang){
            // tampilkan pesan kesalahannya
            console.log(namaPenumpang+' Sudah ada di dalam Angkot!');
            //kembalikan isi array dan keluar dari function
            return penumpang;
            }
            //Jika Seluruh kursi terisi
                else if(i==penumpang.length-1)
                {
            // tambah Penumpang di akhir array
            penumpang.push(namaPenumpang);
                // Kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}
