Calculeaza.addEventListener('click',()=>{
    result.style.visibility="visible"
    result.innerHTML = changeBase();
})

var changeBase = ()=>{
    let fromBase= parseInt(fromBase_input.value)
    let toBase= parseInt(toBase_input.value);
    let value = parseInt(nrTransform_input.value);
    value= fromBaseToBase10(value,fromBase);
    return FromBase10ToBase(value,toBase);
}


//prefer asta in js way.
var FromBase10ToBase = (value,toBase)=>{
    let str="";
    while(value){
        str+=value%toBase;
        value=parseInt(value/toBase);
    }
    return str.split("").reverse().join("");
}

//mai eleganta prima
var FromBase10ToBase_recursive = (value,toBase)=>{
    if(value)
        return  FromBase10ToBase_recursive(parseInt(value/toBase),toBase)+''+(value%toBase) ;
    else return '' 
}

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
