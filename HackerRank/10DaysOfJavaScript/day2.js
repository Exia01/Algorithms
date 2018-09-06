// // function

str = 'javascriptloops';
// function vowelsAndConsonants(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     var first = ''
//     var second = ''
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//         first += str[i] + "\n"
        
//     }
//     }
//     for (let j = 0; j < str.length; j++) {
//         if (!vowels.includes(str[j])) {
//             second += str[j] + "\n"
//       }
//     }
//     return first + second
// }
// console.log(vowelsAndConsonants(str));
let s = 'javascriptloops';
function vowelsAndConsonants(s) {
    let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let outputVowelsArr = [];
    let outputConstArr = [];
    
    for (var i = 0; i < s.length; i++) {
        for (var j of vowelsArr) {
            if (s[i] == j) {
                console.log(s[i]);
                outputVowelsArr.push(s[i]);
            }
            // else {
            //     console.log(s[i]);
            //     outputConstArr.push(s[i]);
            // }
        }
		
    }
}

console.log(vowelsAndConsonants(s))
// If-Else
// let score = 30;
// function getGrade(score) {
//     let grade = ''
//     if (isNaN(score) ) {
//         return "Score needs to be a number."
//     }
//     if (score > 25 && score <= 30) {
//         grade = "A"
//     } else if (score > 20 && score <= 25) {
//         grade = "B"
//     } else if (score > 15 && score <= 20) {
//         grade = "C"
//     } else if (score > 10 && score <= 20) {
//         grade = "D"
//     } else if (score > 5 && score <= 10) {
//         grade = "E"
//     } else if (score > 0 && score <= 5) {
//         grade = "F"
//     } else {
//         return "You can always try again. =]"
//     }
//     return grade;
// }

// console.log(getGrade(score))
