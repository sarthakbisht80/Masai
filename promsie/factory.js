function createCar(make, model, year) {
    return {
        make: make,
        model: model,
        year: year,
        describeCar() {
            console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
        }
    };
}
    