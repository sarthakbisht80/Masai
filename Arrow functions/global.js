//Understanding Global and Function Execution Context
let age=21
function displayage(){
  console.log(age);
}
displayage();

function changeage(){
age =22;
  console.log(age);
}
changeage();