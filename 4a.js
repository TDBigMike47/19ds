var a=2;
var sum=0, res=0;
for(i=1; i<11; i++){
    if(i>1){
        sum+=Math.pow(a,2);
    }else
        sum+=i+a;
    
}
console.log("Resultado 1 ="+ sum);
res=((Math.pow(a,11))-1)/(a-1);
console.log("Resultado 2 =" +res);
console.log("Comprobación = "+(res-sum));