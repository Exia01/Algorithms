class coinToss{
    tossACoin() {
        let toss = Math.floor((Math.random() * 10) % 2)
        if (toss == 0) {
            console.log("Heads");

        } else {
            console.log("Tails")
        }
    }

}

game1 = new coinToss
game1.tossACoin()
game1.tossACoin()
game1.tossACoin()
game1.tossACoin()
game1.tossACoin()
game1.tossACoin()


function printWeird(n) {
    let N = parseInt(n, 10);
    if (N % 2 !== 0) {
        return "Weird"
    } else {
        if (N >= 2 && N <= 5) {
            return "Not Weird"
        }
        if (N >= 6 && N <= 20) {
            return "Weird"
        }
        if (N >= 21) {
            return "Not Weird"
        }
    }

}


console.log(printWeird(20))


function performOperation(secondInteger, secondDecimal) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    const totalDecimal = (firstDecimal + secondDecimal).toFixed(2)

    const firstString = 'HackerRank ';

    console.log(Number.parseFloat((firstDecimal), 10) + Number.parseFloat((secondDecimal), 10));
 

    console.log(Number.parseInt((firstInteger), 10) + Number.parseInt((secondInteger), 10));

}
performOperation(12, 4.32)