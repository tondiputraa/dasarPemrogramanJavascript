

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

alert('Jumlah volume Kubus = '+jumlahVolumeDuaBuahKubus(1,2)+' cm\^3');

alert('Jumlah volume Kubus = '+jumlahVolumeDuaBuahKubus(2,1)+' cm\^3');

alert('Jumlah volume Kubus = '+jumlahVolumeDuaBuahKubus(3,2)+' cm\^3');

alert('Jumlah volume Kubus = '+jumlahVolumeDuaBuahKubus(14,2)+' cm\^3');

alert('Jumlah volume Kubus = '+jumlahVolumeDuaBuahKubus(1,23)+' cm\^3');

alert('Jumlah volume Kubus = '+jumlahVolumeDuaBuahKubus(1,1)+' cm\^3');