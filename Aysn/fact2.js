function createcar(make,model,year){
    return {
        make: make,
        model:model,
        year:year,
      describe: function(){
        console.log(`This car is a ${year} ${make} ${model}..`);
      }
    }
    
}
let car=createcar("camry","Toyata","2022");
car.describe();