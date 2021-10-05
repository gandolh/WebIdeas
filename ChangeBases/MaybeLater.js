
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

//mai eleganta prima
// var FromBase10ToBase_recursive = (value,toBase)=>{
//     if(value)
//         return  FromBase10ToBase_recursive(parseFloat(value/toBase),toBase)+''+(value%toBase) ;
//     else return '' 
// }
