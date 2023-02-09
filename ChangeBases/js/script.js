Calculeaza.addEventListener('click',()=>{
    result.style.visibility="visible"
    result.innerHTML = changeBase();
})

var changeBase = ()=>{

    let fromBase= parseInt(fromBase_input.value)
    let toBase= parseInt(toBase_input.value);
    let value = parseFloat(nrTransform_input.value);
    if(isNaN(value))value=0;
    //preia partea intreaga si fractionara.
    let realPart_value= parseInt(value);
    let fractionaryPart_value = getFractionaryPart( value);

    //daca avem o eroare o afisam si nu mai executam nimic.
    let ok = ValidCheck(value,fromBase,toBase);
    if(!ok.succesfully)
        return ok.errorCode;
    

    //calculeaza schimbarea partii intregi a numarului.
    let realPartTransformed = ChangeBaseReal(realPart_value,fromBase,toBase);
    //calculeaza schimbarea partii fractionare a numarului
    let fractionaryPartTransformed = changeBaseFractionary(fractionaryPart_value,fromBase,toBase);
    let result;


    // daca am parte reala transformata adaug-o la rezultat
    //altfel consider-o 0.
    if(realPartTransformed)
        result = realPartTransformed;
    else result =0;

    //daca exista parte fractionara adaug-o la rezultat
    if(fractionaryPartTransformed)
        result= result + ',' + fractionaryPartTransformed;
    

    //returneaza rezultatul.
    return result;
}



const getFractionaryPart =(value)=>{
    if(isNaN(value))return 0;
    let real= parseInt(value)
    let p=1;
    while(value!=parseInt(value)){
        value*=10;
        real*=10;
        p*=10;
    }
    return (value-real)/p;


}
