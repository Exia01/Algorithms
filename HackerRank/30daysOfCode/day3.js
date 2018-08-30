class Car {
    constructor(brand, maxSpeed, minSpeed, weight) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
        this.condition = 'A';
        this.isTheCarON = false;
        this.minSpeed = new Closerure(minSpeed);
        this.weight = new Closerure(weight);
        var minSpeed = minSpeed;
        var weight = weight;
        this.maxFuel = 16.00
        this.currentFuel = 8.0;
        this.mpg = 26.4
        this.numberOfPEople = 1;

        function Closerure(x) {
            return function (v) {
                if (v == undefined) {
                    return x;
                } else {
                    val = v;
                }
            };
        }
    }

    driveCar() {
        if (this.currentFuel >= .05) {
        this.currentFuel -= 0.5
        return "Driving"
        }
        else {
            return "You have no Gas, consider adding some -> addGas()"
        }
    }
    addGas() {
        if (this.currentFuel <= 15.99) {
            this.currentFuel += .5
            return "Adding gas."
        }
        else {
            return "Car tank is full!"
        }
    
    }

    turnTheCarOn() {
        if (!this.isTheCarON) {
            this.isTheCarON = true
            return "The car is now on."
        }
        else {
            return "Car is already on, watch out for messing with the starter"
        }
    }
    turnTheCarOff() {
        if (this.isTheCarON) {
            this.isTheCarON = false
            return "The car is now Off."
        }
        else {
            return "Car is already Off"
        }
    }
    wreckCondition(condition) {
        this.condition = condition
    }

    carBrand() {
        return this.brand;
    }

    howManyMilesTillOutOfGas() {
        return this.currentFuel * this.mpg;
    }
    
    maxMilesperFillUp() {
        return this.maxFuel * this.mpg;
    }

    showStats() {
        return (
            "Brand:" +
            this.brand +
            "| Current Fuel: " +
            this.currentFuel +
            "| Min Speed: " +
            this.minSpeed() +
            "| Weight: " +
            this.weight() +
            "| condition: " +
            this.condition

        );
    }
    accelerate() {
        this.maxSpeed += 10;
    }
}

Camry = new Car('Toyota', 100, 0, 4079)
console.log(Camry.showStats())

console.log(Camry.driveCar())
console.log(Camry.turnTheCarOn())
console.log(Camry.driveCar())
console.log(Camry.driveCar())
console.log(Camry.driveCar())
console.log(Camry.showStats())
console.log(Camry.turnTheCarOff())
console.log(Camry.turnTheCarOff())
