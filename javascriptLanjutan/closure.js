// function init (){
//    let nama = 'tondi';
//    function tampilNama(){ 
//    console.log(nama);

// }
// tampilNama();
// }
// init();

// function ucapkanSalam(waktu){
//    return function (nama){
//       console.log(`Hallo ${nama}! \nSelamat ${waktu}! \nSemoga harimu menyenangkan!`);
//    }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatMalam = ucapkanSalam('Malam');
// let selamatSiang = ucapkanSalam('Siang');

// selamatPagi('tondi');

// function ucapkanSalam(waktu){
//    return function(nama){
//       console.log(`Halo ${nama} Selamat ${waktu}! bye!`);
//    }
// }

// let selamatPagi = ucapkanSalam ('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam =ucapkanSalam('Malam');

// selamatMalam('tondi');

// function linkApp(app){
// return function (username){
//    console.log(`www.${app}.com/${username}`);
// }
// }

// let linkInstagram = linkApp ('instagram');
// let linkTwitter = linkApp ('twitter');

// linkInstagram('tondiputra');


// let add = (function()
//       {
      
//          let counter = 0;
//          return function()
//          {
//          return ++counter;   
//          }
//       })();

// console.log(add());
// console.log(add());
// console.log(add());



let add = function()
      {
      
         let counter = 0;
         return function()
         {
         return ++counter;   
         }
      }
let a = add();

console.log(a());
console.log(a());
console.log(a());

// function linkApp(app)
// {
//       return function(username)
//       {
//             return function (id)
//             {
//                   return console.log(`www.${app}.com/${username}/${id}`);
//             }
//       }
// }
// let linkInstagram = new linkApp ('instagram');
// let linkInstagramTondi = new linkInstagram('tondiputra');

// linkInstagramTondi('1');





