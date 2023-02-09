var ValidCheck =(value,fromBase,toBase)=>{
    if(isNaN(value ) || isNaN(fromBase ) || isNaN(toBase ) )  
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


    if(toBase_input.value=="")
    return {
        succesfully:false,
        errorCode:"Completati campul pentru baza in care se transforma"
    };
    return {
        succesfully:true,
        errorCode:"N-am"
    }
}