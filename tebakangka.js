


var kesempatan = 3;
alert('Silahkan Tebak angka 1-10 !' + '\n kamu punya ' + kesempatan + ' kesempatan!');
kesempatan--
while (kesempatan >= 0 ) {

    var user = prompt('masukan angka tebakan 1-10');
    var angka = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    var compt = angka(1,10);

    if (user == compt) {
        alert('TEBAKAN ANDA BENAR'+'\n ANGKA YANG DICARI ADALAH ' + compt+'\nSisa kesempatan: '+kesempatan);
        
        tanya=confirm('Apakah anda ingin bermain Lagi?');
        if(tanya===true)
        {
            kesempatan=3;
        }
        
        else{
            break;
        }

    } else if (kesempatan == 0) {
        alert('kesempatan anda telah habis ');
        tanya=confirm('Apakah anda ingin bermain Lagi?');
    if(tanya===true)
    {
        kesempatan=3;
    }
    else{
        break;
    }
    }else if (user > compt ) {
        alert('ANGKA YANG DIMASUKKAN LEBIH BESAR' + '\n kamu punya ' + kesempatan + ' kesempatan' );
    } else if (user < compt) {
        alert('ANGKA YANG DIMASUKKAN LEBIH RENDAH' + '\n kamu punya ' + kesempatan + ' kesempatan');
  kesempatan--
    }
    
}