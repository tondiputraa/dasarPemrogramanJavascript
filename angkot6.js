var jmlhAngkot=10;
var angkotBeroperasi=6;
var noAngkot=1;


for(noAngkot=1;noAngkot<=jmlhAngkot;noAngkot++)
if(noAngkot<=angkotBeroperasi)
{
    if(noAngkot==5)
    {
        console.log('Angkot No. '+noAngkot+' Sedang lembur.');
    }
    else{
    console.log('Angkot No. '+noAngkot+' beroperasi dengan Baik.');
    }
}
else if (noAngkot===8 || noAngkot===10)
{
    console.log('Angkot No. '+noAngkot+' Sedang lembur.');
}
else
{
    console.log('Angkot No. '+noAngkot+' Tidak beroperasi dengan Baik.');
}