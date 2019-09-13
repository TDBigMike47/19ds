var K=5;
var sum=0, res=0;
for(i=1; i<11; i++){
    sum+=Math.pow(i,K);
}
console.log("Resultado 1 ="+ sum);
res=(Math.pow(10,6))/(K+1);
console.log("Resultado 2 =" +res);
console.log("Comprobación = "+(res-sum));