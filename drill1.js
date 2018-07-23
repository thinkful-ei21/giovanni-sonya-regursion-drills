'use strict';

let count = (n) =>{ 

  if(n <= 0){return;}
  else{
    console.log(`${n}- Another sheep jump over the fence`)
    return count(n-1)
  }
};

count(4)