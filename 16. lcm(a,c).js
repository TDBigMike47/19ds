//O(log(a) + log(b)) 
//O(n) Lineal
function gcd_Dos_Numeros(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  

  function lcm_Dos_Numeros(x,y){
        gcd = gcd_Dos_Numeros(x, y);
      
        return (x * y) / gcd;
  }

  console.log(lcm_Dos_Numeros(8,15));