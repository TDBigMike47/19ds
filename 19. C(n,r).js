var comb, perm;
var n=10, r=5;

perm= fact(n)/fact(n-r);
comb= perm/fact(r);

console.log(comb);


function fact(inc)
{
    var fac=1
    for(j=0;j<=inc;j++)
    {
        fac=j*fac
        if(fac==0)
            fac=1
    }
    return fac;
}
