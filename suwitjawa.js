var tanya=true;
while(tanya)
{
    //Pilihan Player
    var p= prompt('Pilih: gajah, semut, orang');



    //Pilihan Komputer

    //Memunculkan Bilangan Random
    var comp=Math.random();

    if(comp<0.34)
    {
    comp='gajah';    
    }
    else if(comp>=0.34 && comp<0.67)
    {
        comp='orang';
    }
    else
    {
        comp='semut';
    }


    var hasil='';

    //Menentukan Rules
    if (p==comp)
    {
        hasil='SERI';
    }
    else if (p=='gajah'){
        // if (comp=='orang')
        // {
        //     hasil='MENANG!';
        // }   
        // else
        // {
        //     hasil='KALAH!';
        // }
        hasil=(comp=='orang')?'MENANG!' : 'KALAH!';
    }
    else if (p=='orang')
    {
        hasil=(comp=='semut')?'MENANG!' : 'KALAH!';
    }

    else if(p=='semut')
    {
        // if(comp='gajah')
        // {
        //     hasil='MENANG!';
        // }
        // else
        // {
        //     hasil='KALAH';
        // }
        hasil=(comp=='gajah')?'MENANG!' : 'KALAH!';
    }

    else{
        hasil='Memasukkan Pilihan yang Salah!';
    }
    //Tampilkan Hasil
    alert('Kamu memilih: '+p+' dan Komputer memilih: '+comp+'\nMaka hasilnya kamu ---> '+hasil);
    tanya=confirm('Apakah anda ingin bermain Lagi?');

}

alert('TERIMAKASIH SUDAH BERMAIN:)');