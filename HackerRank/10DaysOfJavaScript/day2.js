// function
// let vowels = new Array('a', 'e', 'i', 'o', 'u');

// s = "javascriptloops"
// function vowelsAndConsonants(s) {
//     for (const consonant of s) {
//         console.log(consonant)

//     }
// }

// // vowelsAndConsonants(s)
// console.log(isVowel(s))

// If-Else
let score = 27;
function getGrade(score) {
    let grade = ''
    if (isNaN(score) ) {
        return "Score needs to be a number."
    }
    if (score > 25 && score <= 30) {
        grade = "A"
    } else if (score > 20 && score <= 25) {
        grade = "B"
    } else if (score > 15 && score <= 20) {
        grade = "C"
    } else if (score > 10 && score <= 20) {
        grade = "D"
    } else if (score > 5 && score <= 10) {
        grade = "E"
    } else if (score > 0 && score <= 5) {
        grade = "F"
    } else {
        return "You can always try again. =]"
    }
    return grade;
}

console.log(getGrade(score))


