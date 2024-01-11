// // var kondisi = prompt('Jumlah Pengulangan');
// var noAngkot = 1;
// var jmlhAngkotBaik=8;
// var jmlhAngkotTidakBaik=12;
// while (noAngkot<=jmlhAngkotBaik)
// {
//     console.log('Angkot No.'+noAngkot+' beroperasi dengan baik.');
//     noAngkot++;
// }

// for (var angkot=1;angkot<=jmlhAngkotTidakBaik;angkot++)
// {
//     console.log('Angkot No.'+noAngkot+' Tidak beroperasi dengan baik.');
//     noAngkot++;
// }

// console.log('Jumlah Angkot yang kita punya = '+(jmlhAngkotBaik+jmlhAngkotTidakBaik));

var jmlhAngkot=10;
var angkotBeroperasi=6;
var noAngkot=1;

while(noAngkot<=angkotBeroperasi)
{
    console.log('Angkot No. '+noAngkot+' beroperasi dengan Baik.');
    noAngkot++
}

for(noAngkot=angkotBeroperasi+1;noAngkot<=jmlhAngkot;noAngkot++)

{
    console.log('Angkot No. '+noAngkot+' Tidak beroperasi dengan Baik.');
}