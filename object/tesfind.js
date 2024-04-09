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

this.findPenumpangNaik=function(namaPenumpang){
    var fpNaik = this.penumpang.find((x)=>{
        // console.log(x);
        return x===namaPenumpang;
    })

    // console.log(!fpNaik,'fpNaik');
    if(!fpNaik){
        this.penumpang.push(namaPenumpang);
    // return this.penumpang;
    }
    else{
        console.log('Penumpang '+namaPenumpang+' sudah berada di dalam angkot!');
    }
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

// this.findPenumpangTurun=function(namaPenumpang){

//     var fpTurun = this.penumpang.map(function(mappenumpang){
//         if ( mappenumpang==namaPenumpang)
//        {
//             mappenumpang=undefined;
//         }
//     else {
//         console.log('Penumpang tidak berada di Angkot!')
//     }     
//     return mappenumpang;
// });

//     if (this.penumpang.length===0){
//         console.log('Angkot Kosong!')
//         return this.penumpang;
//     }
//     this.penumpang=fpTurun;
//     return this.penumpang;
// }


this.mapPenumpangTurun = function(namaPenumpang){
    var mpTurun = this.penumpang.map(function(mappt){
        if (mappt==namaPenumpang){
            mappt=undefined;
            
        
        }
        else {
            console.log('Penumpang tidak berada di Angkot!');
        }
        return mappt;
    
    });

    if(this.penumpang.length==0){
        console.log('angkot Kosong');
    } 
       

this.penumpang=mpTurun;
return this.penumpang;




}



}

// var angka = [1,9,2,3,4,7];
// var angka2 = angka.map(function(e){
//    return e*2;
// });





var angkot1 = new Angkot ('firman',['bogor','jakarta'],[],0);
