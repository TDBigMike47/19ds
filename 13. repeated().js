let array= [1,2,3,4,5,3,2];
let band=false
for(r=0; r<array.length; r++){
    for(c=0; c<array.length; c++){
        if(array[r]==array[c])
        band=true
    }
}

if(band==true)
    console.log("Hay valores repetidos en el array")