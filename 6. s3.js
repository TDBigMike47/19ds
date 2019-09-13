var sum=0, res=0;
for(i=1; i<11; i++){
    sum+=Math.pow(i,2);
}
console.log("Resultado 1(Sumatoria) ="+ sum);
res=(10*(10+1)*((2*10)+1)/6);
console.log("Resultado 2 (Forma cerrada) =" +res);
console.log("Comprobación = "+(res-sum));