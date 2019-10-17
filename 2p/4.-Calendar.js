class calendario{
    constructor(){
    
    }
    printCalendar(){
        
    }
    isLeapYear(y){
        if(n%4==0&&n%100!=0||n%400==0){
            return true  
        }
        else{
            return false
        }
    }
    todayPlus(d,n){
        switch (d) {
            case "lunes":
                n += 1;
                break;
            case "martes":
                n += 2;
                break;
            case "miercoles":
                n += 3;
                break;
            case "jueves":
                n += 4;
                break;
            case "viernes":
                n += 5;
                break;
            case "sabado":
                n += 6;
                break;
            case "domingo":
                n = n;
                break;
            default:
                "Error";
                break;
        }
        switch (n % 7) {
            case 0:
                n = 1;
                console.log("Domingo");
                break;
            case 1:
                n = 2;
                console.log("Lunes");
                break
            case 2:
                n = 3;
                console.log("Martes");
                break
            case 3:
                n = 4;
                console.log("Miércoles");
                break;
            case 4:
                n = 5;
                console.log("Jueves");
                break;
            case 5:
                n = 6;
                console.log("Viernes");
                break;
            case 6:
                n = 7;
                console.log("Sábado");
                break;
        }
        return n;
    }
    firstDayYear(y){
        var x=0;
        x=(y+Math.floor((y-1)/4)-Math.floor((y-1)/100)+Math.floor((y-1)/400)) % 7;
        return x;
    }
}