'use strict'

let represent = (num)=>{

    if(num===0){return''}
    else if (num%2 === 1){
        return represent(Math.floor(num/2))+'1'
    }
    else{
        return represent(Math.floor(num/2))+'0'
    }

    


}


console.log(represent(4))