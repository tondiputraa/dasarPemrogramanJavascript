var penumpang = ['tondi','putra',undefined,'dian'];
var hapusPenumpang = function (namaPenumpang, penumpang)
{
    //Jika angkot kosong
    if(penumpang.length==0)
    {
        //Tampilkan Pesan
        console.log('Angkot kosong!!');
        }
        //else
        else
        {

            //Telusuri Seluruh Kursi dari Awal
            for (var i=0;i<penumpang.length;i++){
                //Jika ada kursi kosong
                if (penumpang[i]==namaPenumpang){
                    // Tambah penumpang undefined di kursi tersebut
                    penumpang[i]=undefined;
                    // Kembalikan isi array dan keluar dari function
                    return penumpang;
            }
            //jika tidak ada nama yang sama
            else if (i==penumpang.length-1)
            {
        
            // tampilkan pesan kesalahannya
            console.log('Penumpang '+namaPenumpang+' tidak berada di Angkot !!!');
            return penumpang;

            }
            
        
        }
        

      }

}