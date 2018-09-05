// Getting the area

function getArea(length, width) {
    let area;
    area = length * width
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    perimeter = (length * 2 ) + (perimeter *2)
    return perimeter;
}


// Using PI 
function mainproblems() {
    const PI = 3.141592653589793238
    this.letAndConst = (num) => {
        let r = parseFloat(num).toFixed(3)
        let area = PI * (r*r)
        let perimeter = 2 * (PI * r)

        console.log(area)

        // Print the perimeter of the circle:
        console.log(perimeter)


    }
}

problem = new mainproblems()
problem.letAndConst(2.6)