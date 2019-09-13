//numeros primos

function primo(x){
    var af = false;
    for(c=x-1;c>1;c--){
        if(x%c==0) af = true;
    }
    if(af == true || x <= 1) return false;
    else return true;
}

function cuantosPrimos(ene){
    for(c1=0;c1<=ene;c1++){
        if(primo(c1)==false)c--;
        else console.log(c1)
    }
    do{
        
        if(primo(c1)==true)console.log(c1)
    }while(c<=5)
}

primo(5)
cuantosPrimos(10)