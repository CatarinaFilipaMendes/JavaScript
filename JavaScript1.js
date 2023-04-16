//VARIAVEIS
/*
let firstName = "Catarina";
let age = 26;
let country = "Portugal";

{
    let country = "Espanha";
    console.log(country);
}


//VAR
var isSunday = true;
{
    var isSunday = false;
}
console.log(isSunday);


//Let

let isFriday = true;
{
    let isFriday = false;
    console.log(isFriday);
}
console.log(isFriday);
let name = "Francisco";


//Declaração
function displayName(firstName, lastName) {
    const fullName = `O meu nome é ${firstName} ${lastName || ""}`;
    console.log(fullName);
  }
  
  displayName("Francisco", "Brito");
  displayName("João", "Ronaldo");
  displayName("Maria", "Castro");
  displayName("Ana", "Mendes");
  displayName("Fernando");

  */

//Block scoped

let x = 1;

{
  let x = 2; // x é uma variável diferente que x na linha anterior
  console.log(x); //2
}
console.log(x);
