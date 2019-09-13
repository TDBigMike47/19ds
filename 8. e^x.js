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

var x=1

var form=0
for(i=0;i<10;i++)
{
    form+=(Math.pow(x,i))/fact(i)
}
