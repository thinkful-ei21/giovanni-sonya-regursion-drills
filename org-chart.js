'use strict';


const chart = {
  Zuckerberg: null,
  Schroepfer: 'Zuckerberg',
  Bosworth:'Schroepfer',
  Steve: 'Bosworth',
  Kyle: 'Bosworth',
  Andra: 'Bosworth',
  Zhao: 'Schroepfer',
  Richie:'Zhao',
  Sofia:'Zhao',
  Jen:'Zhao',
  Schrage: 'Zuckerberg',
  VanDyck: 'Schrage',
  Sabrina: 'VanDyck',
  Michelle: 'VanDyck',
  Josh: 'VanDyck',
  Swain: 'Schrage',
  Blanch: 'Swain',
  Tom: 'Swain',
  Joe: 'Swain',
  Sandberg: 'Zuckerberg',
  Goler: 'Sandberg',
  Eddie: 'Goler',
  Julie: 'Goler',
  Annie: 'Goler',
  Hernandez: 'Sandberg',
  Rowi: 'Hernandez',
  Inga: 'Hernandez',
  Morgan: 'Hernandez',
  Moissinac :'Sandberg',
  Amy: 'Moissinac',
  Chuck: 'Moissinac',
  Vinni: 'Moissinac',
  Kelley: 'Sandberg',
  Eric: 'Kelley',
  Ana: 'Kelley',
  Wes: 'Kelley',
};


let printOrg = (boss) =>{
    let  employees =Object.entries(chart).filter(pair => pair[1]===boss).map(i => i[0])
    if(employees.length === 0){return `    ${boss}`}
    else{

        return `${boss} ${employees.map(e =>'\n     ' + printOrg(e)  )}
        `
        }
        
}

console.log(printOrg('Zuckerberg'))

