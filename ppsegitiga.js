var    n      = 10; // jumlah baris
var hasil = '';

for (var baris = 1; baris <= n; baris++) {
  for (var spasi = 0; spasi < n - baris; spasi++) {
    hasil += ' ';
  }
  for (var star = 0; star < baris; star++) {
    if (star >= 1) {
        hasil += '*'
    }
    hasil += '*';
  }
  hasil += '\n';
}

for (var baris = 9; baris >= 0; baris--) {
    for (var spasi = 10; spasi>baris; spasi--) {
      hasil += ' ';
    }
    for (var star = 0; star < baris; star++) {
      if (star >= 1) {
          hasil += '*'
      }
      hasil += '*';
    }
    hasil += '\n';
  }
  
console.log(hasil);