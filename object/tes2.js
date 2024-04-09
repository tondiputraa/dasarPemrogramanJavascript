function Angkot (sopir,trayek,penumpang,kas){
this.sopir=sopir;
this.trayek=trayek;
this.penumpang=penumpang;
this.kas=kas;

this.penumpangNaik=function (namaPenumpang) {
    
        for(var i =0;i<this.penumpang.length;i++){
            if(this.penumpang[i]==namaPenumpang){
                console.log('Penumpang '+namaPenumpang+' sudah berada di dalam angkot!');
                return this.penumpang;
            }                   
        }

        this.penumpang.push(namaPenumpang);  
        return this.penumpang;
    }

this.penumpangTurun=function(namaPenumpang,bayar){
    if(this.penumpang.length==0){
        console.log('Angkot Kosong!');
        return this.penumpang;
    }
    else {
        for(var i=0;i<this.penumpang.length;i++){
            if(this.penumpang[i]==namaPenumpang){
                this.penumpang[i]=undefined;
                bayar=+kas;
                return penumpang;
            }
            else if(i=this.penumpang.length){
                console.log('Penumpang '+namaPenumpang+' Tidak ada di dalam angkot!');
            }
        }
    }

}
}


var angkot1 = new Angkot ('firman',['bogor','jakarta'],[],0);
