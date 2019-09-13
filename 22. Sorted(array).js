//Array de 5 elementos y ordenarlos
let array = [1,2,3,4];
let orden
var band;

function sorted(array){
    for(var a=0;a<=array.length;a++){
        band=false
        for(var b=array.length-1;b>a;b--){
            if(array[a]<array[b]){
                orden=true
                band=true
            }else
            orden =false;
            band=true;
        
        }
       if(band==false)
       break;
    
    }
    if(orden==false)
        console.log("El array no esta ordenado");
    else
        console.log("El array esta ordenado")
    

}

console.log(sorted(array));