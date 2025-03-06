function timer(duration,callback){
setTimeout(()=>{
  callback(`Timer of ${duration} ms finisheed`); 
},duration);
}
function oncomplete(time){
console.log(time);

}
timer(2000,oncomplete);
