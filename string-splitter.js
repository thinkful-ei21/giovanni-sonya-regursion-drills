'use strict';

let split = (str, char)=>{


    
  if(str.length === 0){
    return '';
  }
  let    nextSplit = split(str.slice(1), char);
    
  if(nextSplit[0] === char){
    return[str[0], nextSplit.slice(1)];
  }
  else{
    return str[0]+ split(str.slice(1), char);
  }


};


console.log(split('lastoleeolads', 'o'));


