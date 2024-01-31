// Global Scoope / Window Scoope

var a =1;

// function scoope
function tes(a){
    var a = 2;
    console.log(window.a); // memanggil variabel global yang a=1
}

console.log(tes());

// kasus diatas bernama name conflict = menggunakan nama variable yang sama untuk nilai yanh berbeda