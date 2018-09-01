// // we implement getters and setters on this lesson .
// class Car {
//   constructor(brand, maxSpeed, minSpeed, weight) {
//     this.brand = brand;
//     this.maxSpeed = maxSpeed;
//     this.condition = 'A';
//     this.isTheCarON = false;
//     this.minSpeed = new Closerure(minSpeed);
//     this.weight = new Closerure(weight);
//     var minSpeed = minSpeed;
//     var weight = weight;
//     this.maxFuel = 16.0;
//     this.currentFuel = 8.0;
//     this.mpg = 26.4;
//     this.numberOfPEople = 1;

//     function Closerure(x) {
//       return function(v) {
//         if (v == undefined) {
//           return x;
//         } else {
//           val = v;
//         }
//       };
//     }
//   }

//   //  getters
//   get getMaxSpeed() {
//     return this.maxSpeed;
//   }
//   get getMinSpeed() {
//     return this.minSpeed;
//   }
//   get getIsTheCarON() {
//     return this.isTheCarON;
//   }

//   // setters
//   set setMaxSpeed(maxSpeed) {
//     return this.maxSpeed;
//   }
//   set setMinSpeed(minSpeed) {
//     return this.minSpeed;
//   }
//   set setIsTheCarON(TestCar) {
//     return this.isTheCarON;
//   }

//   // set functionName(value) {
//   //     const parts = value.split(' ')
//   //     this.Name = parts[0]
//   //     this.Name = parts[1]
//   //     // or it could be done as such.
//   //     [this.name, this.name] = value.split(' ')
//   // }

//   driveCar() {
//     if (this.currentFuel >= 0.05) {
//       this.currentFuel -= 0.5;
//       return 'Driving';
//     } else {
//       return 'You have no Gas, consider adding some -> addGas()';
//     }
//   }
//   addGas() {
//     if (this.currentFuel <= 15.99) {
//       this.currentFuel += 0.5;
//       return 'Adding gas.';
//     } else {
//       return 'Car tank is full!';
//     }
//   }

//   turnTheCarOn() {
//     if (!this.isTheCarON) {
//       this.isTheCarON = true;
//       return 'The car is now on.';
//     } else {
//       return 'Car is already on, watch out for messing with the starter';
//     }
//   }
//   turnTheCarOff() {
//     if (this.isTheCarON) {
//       this.isTheCarON = false;
//       return 'The car is now Off.';
//     } else {
//       return 'Car is already Off';
//     }
//   }
//   wreckCondition(condition) {
//     this.condition = condition;
//   }

//   carBrand() {
//     return this.brand;
//   }

//   howManyMilesTillOutOfGas() {
//     return this.currentFuel * this.mpg;
//   }

//   maxMilesperFillUp() {
//     return this.maxFuel * this.mpg;
//   }

//   showStats() {
//     return (
//       'Brand:' +
//       this.brand +
//       '| Current Fuel: ' +
//       this.currentFuel +
//       '| Min Speed: ' +
//       this.minSpeed() +
//       '| Weight: ' +
//       this.weight() +
//       '| condition: ' +
//       this.condition
//     );
//   }
//   accelerate() {
//     this.maxSpeed += 10;
//   }
// }
// // Object.defineProperty(Car, 'stats', {
// //     get() {
// //         return `${this.maxSpeed} ${this.brand}`;
// //     },

// //     set(value) {
// //         [this.brand, this.maxSpeed] = value.split(" ");
// //     }
// // });

// Camry = new Car('Toyota', 100, 0, 4079);
// console.log(Camry.getMaxSpeed);

// // let user = {
// //     name: "John",
// //     surname: "Smith"
// //   };

// //   Object.defineProperty(user, 'fullName', {
// //     get() {
// //       return `${this.name} ${this.surname}`;
// //     },

// //     set(value) {
// //       [this.name, this.surname] = value.split(" ");
// //     }
// //   });

// //   console.log(user.fullName); // John Smith

// //   for(let key in user) console.log(key); // name, surname

class Person {
  constructor(age) {
    if (age >= 0) {
     this.age = age;
    } else {
      this.age = 0
      console.log('Age is not valid, setting age to 0.');
    }
  }
  get getAge() {
      return this.age;
  }
  // set setAge(num) {
  //     this.age = num;
  // }
  // set agePeople() {
  //     this.age += 1;
  // }
  // yearPasses() {
  //     agePeople()
  // }
  ageInfo() {
    // Add some more code to run some checks on initialAge
    return this.age
  }

  amIOld() {
    let initialAge = this.age
    // Do some computations in here and print out the correct statement to the console
    if (initialAge <= 0) {
      return ('Sorry, Age is not valid, age was set 0');
    }
    if (initialAge < 13) {
      return ('You are young.');
    } else if (initialAge >= 13 && initialAge < 18) {
      return ('You are a teenager.');
    } else {
      return ('You are old.');
    }
  }
    
  
    yearPasses() {
    // Increment the age of the person in here
    this.age++;
  }
}
p = new Person(0);

console.log(p.amIOld())
p.yearPasses();
console.log(p.getAge)
