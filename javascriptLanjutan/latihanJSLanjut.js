// ambil semua elemen video
let videos = Array.from(document.querySelectorAll('[data-duration'));

// pilih yang hanya javascript lanjutan
let jsLanjut = videos.filter(video=>video.textContent.includes('JAVASCRIPT LANJUTAN'))


// ambil durasi masing masing video
.map(item =>item.dataset.duration)


// ubah durasi menjadi float, ubah menit jadi detik
.map(waktu => {
    //21:30 -> [21,30] split
    const parts = waktu.split(':') .map(part=>parseFloat(part));
    return (parts[0]*60)+parts[1] ;
})


// jumlahkan semua detik
.reduce((total,detik)=>total+detik);


// ubah formatnya jadi Jam, Menit, Detik
let jam = Math.floor(jsLanjut/3600);
jsLanjut = jsLanjut - jam*3600
let menit = Math.floor(jsLanjut/60);
let detik = jsLanjut-menit*60;

//Simpan di DOM
const jmlVideo = videos.filter(video=>video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video`;

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam ${menit} Menit ${detik} Detik.`;


// allVideos
let allVideos = Array.from(document.querySelectorAll('[data-duration'))
.map (dvideo=>dvideo.dataset.duration)
.map(awaktu => {
    //21:30 -> [21,30] split
    const aparts = awaktu.split(':') .map(apart=>parseFloat(apart));
    return (aparts[0]*60)+aparts[1] ;
})

// jumlahkan semua detik
.reduce((atotal,adetik)=>atotal+adetik);
// ubah formatnya jadi Jam, Menit, Detik
let ajam = Math.floor(allVideos/3600);
allVideos = allVideos - ajam*3600;
const amenit = Math.floor(allVideos/60);
const adetik = allVideos-amenit*60;

const jmlaVideo = videos.length;
const paJmlaVideo = document.querySelector('.jumlah-avideo');
paJmlaVideo.textContent = `${jmlaVideo} Video`;

const paDurasi = document.querySelector('.total-adurasi');
paDurasi.textContent = `${ajam} Jam ${amenit} Menit ${adetik} Detik.`;

