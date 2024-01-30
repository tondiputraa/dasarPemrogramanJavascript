// function tambah(){
// var hasil=0;

// for (var i=0;i<arguments.length;i++){
//     hasil+=arguments[i];
// }
// return hasil;
// }

// var coba = tambah(1,2,3,4,5);
// alert(coba);

function tambah(){                                //deklarasi fungsi
    var hasil=0;                                      //rumus                           

for(var i=0;i<arguments.length;i++){                //rumus penyimpanan argument.length 
    hasil = hasil + arguments[i];
}
return hasil;
}
var coba = tambah(1,1,1,1,1,1,1,1,1,1,1);      //panggil fungsi di variabel coba

alert(coba);