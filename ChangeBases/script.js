Calculeaza.addEventListener('click',()=>{
    result.style.visibility="visible"
    result.innerHTML = changeBase();
})

var changeBase = ()=>{

    let fromBase= parseInt(fromBase_input.value)
    let toBase= parseInt(toBase_input.value);
    let value = parseFloat(nrTransform_input.value);



    let realPart_value= parseInt(value);
    let fractionaryPart_value = value - realPart_value;


    let ok = ValidCheck(value,fromBase,toBase);
    if(!ok.succesfully)
        return ok.errorCode;
    

    //value= fromBaseToBase10(value,fromBase);

    let realPartTransformed = FromBase10ToBaseReal(realPart_value,toBase);
    let fractionaryPartTransformed = FromBase10ToBaseFractionary(fractionaryPart_value,toBase);
    let result;


    
    if(realPartTransformed)
        result = realPartTransformed;
    else result =0;

    if(fractionaryPartTransformed)
        result= result + ',' + fractionaryPartTransformed;
    return result;
}

