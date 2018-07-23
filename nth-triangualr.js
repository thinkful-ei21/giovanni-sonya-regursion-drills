'use strict'

let nthT = (n) =>{
    if(n===0){
        return 0}
    else {
        return n + nthT(n-1)
    }
}

console.log(nthT(5))