
var fromBaseToBase10= (value,fromBase)=>{
    let p=1;
    numberInBase10=0;
    while(value){

        numberInBase10+= value%10 * p;
        p*=fromBase;
        value= parseInt(value/10);
    }
    return numberInBase10;
}