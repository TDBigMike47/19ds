class fact{
    constructor(n){
        this.n = n;
        this. cost = 0;
        this.succ = new Array;
    }

    value(){
        return this.calcVal(this.n)
    }

    calcVal(x){
        let c = 0;
        if(x> 1){
            if(x == this.n)this.succ[c] = x;
            else this.succ[c] = x * (this.succ[(c-1)]);
            this.cost ++;
            c ++
            return (this.calcVal(x-1) * x);
            }
        else return x;
    }

    cost(){
        return this.cost;
    }

    succ(){
        return this.succ
    }

    costT(){
        let tabla = new Array(this.succ, new Array)

        for(let c = 0; c < this.succ.length; c++){
            tabla[1][c] = c+1
        }
        return tabla;
    }

}

let fact1 = new fact(5);