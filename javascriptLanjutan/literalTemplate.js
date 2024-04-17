// HTML Fragments
// const mhs = {
//     nama:'tondi putra',
//     umur: 26,
//     nim:1234,
//     email: 'tondiiputra@gmail.com'
// };

// const el = `<div class="mhs">
// <h2 class="">${mhs.nama}</h2>
// <span class="nim">${mhs.nim}</span>
// </div>`;

// document.body.innerHTML = el;

//Looping
// const mhs = [
//     {
//         nama:'tondi putra',
//         email:'tondiiputra@gmail.com'
//     },
//     {
//         nama:'diankharisma',
//         email:'diankharisma@gmail.com'
//     },
//     {
//         nama:'nafis mubarak',
//         email:'nafismubarak@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
// ${mhs.map(m=>`<ul class="">
//     <li class="">${m.nama}</li>
//     <li class="">${m.email}</li>

//     </ul>`).join('')}
// </div>`;

// document.body.innerHTML=el;


//conditional
// const lagu = {
//     judul:'kau adalah',
//     penyanyi:'isyana'
//     ,feat:'rayi putra'
// }

// const el = `<div class="lagu">
// <ul class="">
// <li class="">${lagu.penyanyi}</li>
// <li class="">${lagu.judul} feat. ${lagu.feat?(lagu.feat):''}</li>
// </ul>
// </div>`

// document.body.innerHTML=el;


//nested 
//HTML Fragments bersarang
const mhs = {
nama: 'Tondi Putra',
semester: 5,
mataKuliah:[
'Rekayasa Perangkat Lunak',
'Kalkulus',
'Pemrograman Berorientasi Objek',
'Kecerdasan Computasi Visual'
]
};

function cetakMatakuliah(mataKuliah){
    return `
    <ol>
     ${mataKuliah.map(mk=>`<li>${mk }</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester: ${mhs.semester}</span>
<h4>Mata Kuliah:</h4>
${cetakMatakuliah(mhs.mataKuliah)}
</div>`;


// console.log(el);
document.body.innerHTML=el;

