Calculeaza.addEventListener('click',()=>{
    result.style.visibility="visible"
    result.innerHTML = changeBase();
})

var changeBase = ()=>{

    let fromBase= parseInt(fromBase_input.value)
    let toBase= parseInt(toBase_input.value);
    let value = parseInt(nrTransform_input.value);

    let ok = ValidCheck(value,fromBase,toBase);
    if(!ok.succesfully)
        return ok.errorCode;
    

    //value= fromBaseToBase10(value,fromBase);
    return FromBase10ToBase(value,toBase);
}


//prefer asta in js way.
var FromBase10ToBase = (value,toBase)=>{
    let str="";
    while(value){
        let digit = value%toBase;
        if(digit>=10)
            digit=String.fromCharCode("A".charCodeAt(0) + digit-10);
        str+=digit;
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



var ValidCheck =(value,fromBase,toBase)=>{
    if(isNaN(value ) || isNaN(value ) || isNaN(value ) )  
          return {
        succesfully:false,
        errorCode:"Campurile trebuie completate!"
    };

    if(fromBase>16 || toBase>16)return {
        succesfully:false,
        errorCode:"Baza de transformare este prea mare. Va rugam alegeti una mai scurta"
    };
    if(toBase_input.value.match(/^[0-9]+$/) == null &&  fromBase_input.value.match(/^[0-9]+$/) == null)
    return {
        succesfully:false,
        errorCode:"Baza de numeratie nu poate contine litere"
    };

    for(let lDigit=value%10;value;value= parseInt(value/10)){

        if(lDigit>=fromBase)
        return {
            succesfully:false,
            errorCode:"Numarul are cifre mai mari decat baza din care provine"
        };
    }

    return {
        succesfully:true,
        errorCode:"N-am"
    }
}

