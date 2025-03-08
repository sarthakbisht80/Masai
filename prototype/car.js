
function Car(make, model, year, type) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type;
    this.isAvailable = true;
}

function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}


Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented ${car.make} ${car.model}.`);
    } else {
        console.log(`${car.make} ${car.model} is already rented.`);
    }
};

Customer.prototype.returnCar = function(car) {
    setTimeout(() => {
        car.isAvailable = true;
        this.rentedCars = this.rentedCars.filter(c => c !== car);
        console.log(`${this.name} returned ${car.make} ${car.model}.`);
    }, 2000); // Simulating delay in processing return
};

function PremiumCustomer(name, discountRate) {
    Customer.call(this, name);
    this.discountRate = discountRate;
}
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

function calculateRentalPrice(car, days, customer) {
    const basePrice = 50;
    const typeRates = { SUV: 70, Sedan: 50, Hatchback: 40 };
    let price = (typeRates[car.type] || basePrice) * days;
    
    if (customer instanceof PremiumCustomer) {
        price -= price * (customer.discountRate / 100);
    }
    return price;
}

// Maintenance function
function Maintenance(car, delay) {
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}

