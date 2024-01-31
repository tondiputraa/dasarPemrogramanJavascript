

function jumlahVolumeDuaBuahKubus(a,b){
    var a;
    var b;
    var volumeA;
    var volumeB;
    var total;

    volumeA=a*a*a;
    volumeB=b*b*b;
    total=volumeA+volumeB;

    return total;
}

alert('Jumlah volume Kubus = '+jumlahVolumeDuaBuahKubus(1,2));