// $.ajax({
// url: 'http://www.omdbapi.com/?apikey=c983ca9&s=avengers',
// success: movies=> console.log(movies)
// });

// fetch('http://www.omdbapi.com/?apikey=c983ca9&s=avengers')
// .then (response=>response.json())
// .then(response=>console.log(response));

// fetch ('http://www.omdbapi.com/?apikey=c983ca9&s=avengers')
// .then (response=>response.json())
// .then(response=>console.log(response));

//promise
//---> Object yang mempresentasikan keberhasilan / kegagalan sebuah event 
//yang asynchronus di masa yang akan datang
// janji (terpenuhi/ingkar)
// states (fullfilled / rejected / pending)
// callback (resolved / reject / finally)
// aksi (than (terpenuhi) / catch (reject))

//contoh 1
// let ditepati = false;
// janji1 = new Promise((resolve,reject)=>{
//     if(ditepati){
//         resolve('Janji Terpenuhi !');
//     }
//     else{
//         reject('Janji diingkari');
//     }
// });

// janji1
// .then(response=>console.log('Ok! '+response))
// .catch(response=>console.log('Not OK! '+response));


//contoh 2 (janji tidak langsung terpenuhi)
// let ditepati = true;
// const janji2 = new Promise ((resolve,reject)=>{
//     if (ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!')
//         }, 2000);
//     }
//     else
//     {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu!')
//         }, 2000);
//     }
// });


// console.log('mulai');
// // console.log(janji2.then(()=>console.log(janji2)));
// janji2
// .finally(()=>console.log('Selesai menunggu...'))
// .then(response=>console.log('Ok! '+response))
// .catch(response=>console.log('Not OK! '+response));

// console.log('Selesai');

// Promise.all
let ditepati = true;

const film = new Promise ((resolve,reject)=>{
if(ditepati)
{
    setTimeout(() => {
    resolve([{
        judul:'Avengers',
        sutradara:'tondi',
        pemeran:'putra, nafis'
    }])}, 1000);
}    
else
{
    setTimeout(() => {
        reject('Tidak terpenuhi')
        }, 1000);
}
});

const cuaca = new Promise ((resolve,reject)=>{
    if(ditepati)
    {
        setTimeout(() => {
        resolve([{
            kota:'Bandung',
            temp:26,
            kondisi:'cerah'
        }])}, 500);
    }    
    else
    {
        setTimeout(() => {
            reject('Tidak terpenuhi')
            }, 1000);
    }
    });

// film.then(response=>console.log(response));
// cuaca.then(response=>console.log(response));

Promise.all([film,cuaca]).then(
    response=>{
        const [film,cuaca]=response;
        console.log(film);
        console.log(cuaca);
    }
)