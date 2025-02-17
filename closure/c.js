
function outer()
{
let message ="hi";
return  function inner(){
 {
    console.log(message);
 }
};

}
const res=outer();
res();