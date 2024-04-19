//Asynchronous Callback
console.log('mulai');
$.ajax(
    {
        url:'data/mahasiswa.json',
        succes:(mhs)=>{mhs.forEach(m=>console.log(m.nama));
        },
        eror:(e)=>{console.log(e.responseText);}
    });

console.log('selesai');

    
    
