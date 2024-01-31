// function tes (){
//     return tes();   ----->  rekursif looping yang tidak berhenti
// }

// tes();


// for (var i=10;i>0;i--){

//     console.log(i);
// }


// var f = prompt('Masukkan Angka : ');


function tampilAngka(n) {
     if(n===0) {
        return;       //Base case (statment buat memberhentikan) 
    }
    console.log(n);
    tampilAngka(n-1);
}



function faktorial(f) {
    
    if(f<0){
        return console.log('Masukkan bilangan POSITIF!');
    }
    else
    if(f===0) return 1;
    return f * faktorial(f-1);
}


function  faktorisasi (a,p){
   var a=prompt('masukkan angka :');
   var p=prompt('masukkan pangkat :');
   var hasil=Math.pow(a,p);
   alert(hasil);

}

faktorisasi();