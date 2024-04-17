// //Tagged Templates
// const nama = 'Tondi Putra';
// const umur = 26;

// const str = `Hallo nama saya ${nama} umur saya ${umur} Tahun.`

// console.log(str);

// Highlight

const nama = 'tondi putra';
const umur = '26';
const email = 'tondiiputra@gmail.com';

// function highlight (strings, ...values){
//     return strings.reduce((result,str,i)=>`${result}${str} 
//     <span class="hl">${values[i] || ''}</span>`,'');
 
// }

// const str = highlight`Halo, nama saya ${nama} umur saya ${umur} tahun, dan email saya ${email}.`;

// document.body.innerHTML=str;

function highlight (strings, ...values){
    return strings.reduce((result,str,i)=>`${result}${str}
    <span class="hl">${values[i] || ''}</span>`,'')
}

const str = highlight `halo nama saya ${nama} umur saya ${umur} dan email saya ${email}.`;

document.body.innerHTML=str;