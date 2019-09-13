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
//SENO CON RADIANES
var x=4
var nega=false
var form=0
for(i=0;i<20;i++)
{
    if(i%2!=0&&nega==false)
    {
        form+=(Math.pow(x,i))/fact(i)
        
        nega=true
    }
    else if(i%2!=0&&nega==true)
    {
        form-=(Math.pow(x,i))/fact(i)
        console.log(i)
        nega=false
    }
}
console.log(form)