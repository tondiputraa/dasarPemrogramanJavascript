// var angka = parseInt(prompt('Masukkan angka?'));
var item = prompt('Masukkan nama makanan atau minuman:\n cth: nasi, daging, susu, hamburger, softdrink');

switch(item)
{
    case 'nasi':
        alert('Kamu memasukkan makanan/minuman SEHAT!');
        break;

    case 'daging':
    alert('Kamu memasukkan makanan/minuman SEHAT!');
        break;

    case 'susu' :
        alert('Kamu memasukkan makanan/minuman SEHAT!');
        break;

    case 'hamburger' :
        alert('Kamu memasukkan makanan/minuman TIDAK SEHAT!');
        break;
    
    case 'softdrink' :
        alert('Kamu memasukkan makanan/minuman TIDAK SEHAT!');
        break;
    
    default:
        alert('Makanan/minuman tidak terdaftar!');
        break;
                  
}