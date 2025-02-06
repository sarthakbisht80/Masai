let temprature=[23,22,30,27,25,29,31];
let res="";
console.log(temprature[3]);
temprature[3]+=2;
for(let i=0;i<temprature.length;i++){
  res=res+temprature[i]+" ";
}
console.log("updated array")
console.log(res);