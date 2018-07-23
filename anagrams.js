'use strict';



let anagram = (word)=>{

  let results = [];
  let iterate = (word, prefix)=>{

    if(word.length ===1 ){results.push(prefix + word);}

    else{
      for (let i =0; i < word.length ; i++ ){
        iterate((word.slice(0,i)+word.slice(i+1)),prefix+word[i]);
      }   
    }
  };

  iterate('east', '');
    
  return results;
};

console.log(anagram('east'));