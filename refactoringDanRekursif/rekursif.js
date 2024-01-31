// function tes (){
//     return tes();   ----->  rekursif looping yang tidak berhenti
// }

// tes();


// for (var i=10;i>0;i--){

//     console.log(i);
// }

function tampilAngka(n) {
    if(n===0) return;       //Base case (statment buat memberhentikan) 
    console.log(n);
    tampilAngka(n-1);
}

function faktorial(f) {
    if(f===0) return 1;
    return f * faktorial(f-1);
}

console.log(faktorial(6));