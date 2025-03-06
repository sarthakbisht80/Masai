function createInventoryItem(name ,category, price){
    let obj={};
    obj.name=name;
    obj.category=category;
    obj.price=price;
    obj.describeItem=function(){
    console.log( ` ${name} ${category} ${price}`);
 }
 
    return obj;


}


function addItemDiscount(obj,discount){


    obj.applyDiscount=function(){
    const dis=   obj.price-((obj.price *discount)/100);
    obj.discountedPrice=dis;
    console.log(obj.discountedPrice);
}
    return obj;
}
const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();


const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();

