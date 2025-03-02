const  fetchUserCities =async()=>{

   const a= await fetch(" https://jsonplaceholder.typicode.com/users");
    const data=await a.json();
return data.map(user=>user.address.city);
   
}
fetchUserCities().then((res)=>{
    console.log(res);
});