class Factorial{
    constructor(n){
        this.n = n;
    }
    getValue(n = this.n){
        function value(n){
            if(n <= 1){
                return 1;
            } else {
                return n*value(n-1);
            }
        }
        return value(n);
    }

    getCost(n = this.n){
        let c = 0;
        function value(n){
            if(n <= 1){
                c++;
            } else {
                c++;
                return n*value(n-1);
            }
        }
        value(n);
        return c;
    }

    getSucesion(){
        let sucesion = [];
        for(let i = 1; i <= this.n; i++){
            sucesion.push(this.getValue(i));
        }
        return sucesion;
    }
    getTable(){
        console.log("  numero ------ costo ------ valor ");
        for(let i = 1; i <= this.n; i++){
            console.log("f(" + i + ") ----------- " + this.getCost(i) + " - ---------" + this.getValue(i));
        }
    }
}
let numero = new Factorial(5);
console.log(numero.getValue());
console.log(numero.getSucesion());
console.log(numero.getCost());
console.log(numero.getTable());