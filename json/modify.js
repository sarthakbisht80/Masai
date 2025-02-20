
function modifyAndMerge(arr1, arr2){

 arr1.splice(1,1,"bus "," scooter");
 let newarr= arr1.concat(arr2);


return newarr;


}
console.log(modifyAndMerge(["car", "bike", "train"],["plane", "ship"]));
