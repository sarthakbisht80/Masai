
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.getDetails = function() {
    return `${this.name} - $${this.price} (Quantity: ${this.quantity})`;
};


function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity);
    this.brand = brand;
    this.model = model;
}

Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;


Electronics.prototype.powerOn = function() {
    return `${this.name} by ${this.brand} (Model: ${this.model}) is now ON.`;
};

Electronics.prototype.powerOff = function() {
    return `${this.name} by ${this.brand} (Model: ${this.model}) is now OFF.`;
};

function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity);
    this.size = size;
    this.material = material;
}


Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

Clothing.prototype.getClothingInfo = function() {
    return `${this.name} - Size: ${this.size}, Material: ${this.material}`;
};


function Book(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity);
    this.author = author;
    this.genre = genre;
}

// Inheriting from Product
Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;

// Adding a method specific to Books
Book.prototype.getBookInfo = function() {
    return `"${this.name}" by ${this.author} - Genre: ${this.genre}`;
};

