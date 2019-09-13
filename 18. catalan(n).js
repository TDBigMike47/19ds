var n= 5;
var cata;
cata= fact((2*n))/(fact(n)*fact((n+1)));

console.log(cata)


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