
var FromBase10ToBaseReal = (value,toBase)=>{


    return FromBase10ToBaseReal_Universal();


   

}


var FromBase10ToBaseReal_Universal = (value,toBase)=>{
    let str="";
    while(value){
        let digit = value%toBase;
        if(digit>=10)
            digit=String.fromCharCode("A".charCodeAt(0) + digit-10);
        str=digit + str;
        value=parseInt(value/toBase);
    }
    return str;
}




var FromBase10ToBaseFractionary = (value,toBase) =>{
    let max_depth = 10;
    let attempts=0;
    let solution_str="";
    while(value && attempts<max_depth){
        value*=toBase;

        let digit= parseInt(value)
        if(digit>=10)
            digit=String.fromCharCode("A".charCodeAt(0) + digit-10);
        solution_str+= digit;
        value-=parseInt(value);
        attempts++;
    }

    return solution_str;
}
