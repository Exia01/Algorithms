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
        this.maxFuel = 16
        this.currentFuel = 8;
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
            "| Max Speed: " +
            this.maxSpeed +
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

// let sixtosCar = (({ condition, speed }) => ({ condition, speed }))(Camry)
// console.log(sixtoCar)
Camry.accelerate()
console.log(Camry.showStats())

sixtosCar = Camry
sixtosCar.accelerate()
sixtosCar.wreckCondition('C')

console.log(sixtosCar.showStats())

console.log(sixtosCar.isTheCarON)
sixtosCar.isTheCarON = true;
console.log(sixtosCar.isTheCarON)

sixtosCar.brake = function () {
    console.log("Frena por la puchica Sixto")
}

sixtosCar.brake()

Camry.maxSpeed = 70
console.log(Camry.showStats())
console.log(Camry.weight())
console.log(Camry.showStats())
console.log(Camry.howManyMilesTillOutOfGas())
console.log(Camry.maxMilesperFillUp())



function solve(meal_cost, tip_percent, tax_percent) {
    let tax = meal_cost * tax_percent
    let meal = meal_cost + tax
    let tip = meal * tax
    let total = tax + meal + tip
    
    console.log("The total meal cost is " + total + " dollars.")
    

}