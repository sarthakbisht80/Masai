function createEmployee(name ,role,salary){
 let obj ={};
 obj.name=name;
 obj.salary=salary;
 obj.role=role;
 
obj.introduce=function(){
console.log(`hellow I am ${name} working as a ${role}..`);

}
return obj;
}
 let car=createEmployee("ricky","Frontend dev","6lpa");
 car.introduce();
