let arr1=[ { id: 1, name: "Laptop", price: 999.99, category: "Electronics", stock: 15 },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", stock: 20 }
]
let arr2=[
    { id: 3, name: "Blender", price: 49.99, category: "Kitchen", stock: 10 },
  { id: 4, name: "Coffee Maker", price: 89.99, category: "Kitchen", stock: 5 }
];
// merging-
let resultarr=[...arr1,...arr2];
//destructring :
let [firstid,firstname,secondid,secondname]=resultarr;
console.log(firstid.id ,firstname.name);

// 