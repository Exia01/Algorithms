// For loops
function printWhileLoop() {
  let x = 0
  while (x < 5) {
    if()
    console.log("The value of x is ", x)
    x++

  }
}
printWhileLoop();

function doWhileLoop() {
  let i = 0
  let text = ''
  do {
    text += "The number is " + i + "\n"
    i++;
    console.log(text)
}
  while (i < 5);
} 

doWhileLoop()

function practiceForLoop() {
  s = ''
  for (let x = 0; x < 20; x++) {
    s += "The value of x is " + x + "\n"
    for (let x = 0; x < 20; x++){

    }
  }
  console.log("For-loop finished.")
  return s
}

console.log(practiceForLoop())

function coordinates() {
  s = ''
  for (let x = 0; x < 10 ; x++) {
    for (let y = 0; y < 10; y++){
      console.log("("+x+","+ y+")")
    }
  }
}
coordinates()


    
function main() {
  let n = 2
  for(let x=1; x<10; x++){
      console.log(x + " x "+ n + " = " + (n*x) )
  }
}

main();