var valor;
valor = prompt("Introduce el valor de la base que se utilizara para el log")
for(i=1; i<11; i++){
    console.log("El logaritmo base "+valor+ " de "+i+" es = "+ (Math.log(i)/Math.log(valor)));
}           