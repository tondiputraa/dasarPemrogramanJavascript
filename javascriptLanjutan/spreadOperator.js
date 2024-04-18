// const dosen = ['ade','doddy','wanda'];
// const orang = [...mhs,'aji',...dosen,]
// console.log(orang);

// //mengcopy array
// const mhs = ['tondi','putra','nafis'];
// const mhs1 =[...mhs];
// mhs1[0] = 'fajar';
// console.log(mhs);


// const liMhs = document.querySelectorAll('li');
// console.log(liMhs[0].textContent);
// const mhs = [];
// for (let i=0;i<liMhs.length;i++)
// {
//     mhs.push(liMhs[i].textContent); //textcontent
// }
// console.log(mhs);

//let mhs=liMhs.map(a=>); //tidak bisa pakai map karna nodelist
// let mhs = [...liMhs].map(a=>a.textContent);
// console.log(mhs);


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h=>`<span>${h}</span>`).join('');
nama.innerHTML = huruf;
