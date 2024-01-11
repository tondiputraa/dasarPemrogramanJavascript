var jmlhAngkot=10;
var angkotBeroperasi=5;
var noAngkot=1;


for(noAngkot=1;noAngkot<=jmlhAngkot;noAngkot++)
if(noAngkot<=angkotBeroperasi)
{
    console.log('Angkot No. '+noAngkot+' beroperasi dengan Baik.');
}
else if(noAngkot===8)
{
    console.log('Angkot No. '+noAngkot+' Sedang lembur.');
}
else
{
    console.log('Angkot No. '+noAngkot+' Tidak beroperasi dengan Baik.');
}