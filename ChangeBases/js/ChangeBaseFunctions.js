
//schimba baza
var ChangeBaseReal = (value,fromBase,toBase)=>{
    let solution_str="Nu e inca implementat";



    if(fromBase==10)
    solution_str= ChangeBaseReal_FB10(value,toBase);

    //fromBase^c = toBase
    let c=Math.log(toBase) / Math.log(fromBase);
    if(c==parseInt(c))
        solution_str=ChangeBaseReal_FBLOG(value,fromBase,toBase,c);
    return solution_str;
}


var changeBaseFractionary = (value,fromBase,toBase) =>{
    let solution_str="";
    if(fromBase==10)
    solution_str=changeBaseFractionary_FB10(value,toBase);

    //fromBase^c = toBase
    let c=Math.log(toBase) / Math.log(fromBase);
    if(c==parseInt(c))
        solution_str=changeBaseFractionary_FBLOG(value,fromBase,toBase,c);
    
    return solution_str;
}


var ChangeBaseReal_FB10 = (value,toBase)=>{
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


const changeBaseFractionary_FB10 = (value,toBase) =>{
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


const ChangeBaseReal_FBLOG = (value,fromBase,toBase,c)=>{
   //fromBase^c = toBase
   let solution_str='';
    while(value){
        pow=1;
        let digit=0;
        for(let i=0;i<c;i++){
            digit= digit + (value%10)*pow;
            pow*=fromBase;
            value=parseInt(value/10);
        }
        if(digit>=10)
            digit=String.fromCharCode("A".charCodeAt(0) + digit-10);
        solution_str=digit+ solution_str;
    }
    return solution_str;
}


const changeBaseFractionary_FBLOG = (value,fromBase,toBase,c)=>{
    //fromBase^c = toBase
    let solution_str="";
    while(value!=parseInt(value)){
        value*=10;
        pow= Math.pow(fromBase,c-1); 
        let digit=0;
        for(let i=0;i<c;i++){
            digit= digit + parseInt(value%10)*pow;
            pow= parseInt(pow/fromBase);
            value*=10;
        }
        if(digit>=10)
            digit=String.fromCharCode("A".charCodeAt(0) + digit-10);
        solution_str= solution_str+digit;
        value/=10;
    }

    return solution_str;
 }

 