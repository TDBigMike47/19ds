var points = [5, 2, 4, 1, 5, 2, 5, 9, 1, 7];

function list(x){
    var x = x.sort(function(a, b){return a-b});
    var lista = new Array
    var contador = 0;
    for(c1 = 0; c1 < x.length; c1++){
        var iguales = 1;
        if(x[c1]==x[c1+1]){
            for(c2 = c1+1; c2 < x.length; c2++){
                if(x[c1]==x[c2]) iguales++;
            }
        }
        lista[contador] = iguales;
        lista[contador+1] = x[c1];
        contador = contador + 2;
        c1 = c1 + iguales -1;
    }
    return lista;
}

list(points)