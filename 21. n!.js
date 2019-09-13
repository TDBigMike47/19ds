var inc;
inc=prompt("Introduzca el número que desea obtener el factorial")
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
console.log(fact(inc))