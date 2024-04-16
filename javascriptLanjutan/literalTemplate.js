// HTML Fragments
const mhs = {
    nama:'tondi putra',
    umur: 26,
    nim:1234,
    email: 'tondiiputra@gmail.com'
};

const el = `<div class="mhs">
<h2 class="">${mhs.nama}</h2>
<span class="nim">${mhs.nim}nim</span>
</div>`;

console.log(el);