// // Self Practice before HackerRank
//  process.stdin.setEncoding('utf8')

// let readline = require('readline');

// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout

// });
// /*
// let person = {
//   name: '',
//   hobbies: []
// }

// rl.question("What's your name?  ", answer => {
//   console.log("Hello " + answer);
//   person.name = (answer.trim())
//   rl.setPrompt(`What are ${person.name}'s hobbies?`)
//   rl.prompt()
//   rl.on('line', saying => {
//     person.hobbies.push(saying.trim())
//     console.log(saying.trim())
//     if (!saying) {
//       console.log('Please answer the question.')
//       rl.prompt()
//     } else if (saying) {
//       rl.setPrompt(`What are other hobbies that ${person.name} has? ('exit' to leave)`)
//       rl.prompt()
//       if (saying.toLowerCase().trim() === 'exit') {
//         rl.close();
//       } else {
//         person.hobbies.push(saying.trim())
//       }
//     }
//   })

//   rl.on('close', function () {
//     console.log("%s hobbies are %j", person.name + "'s", person.hobbies)
//     process.exit()
//   })
// });

// let questions = [
//   "What's your name?",
//   "What's your favorite Programming language?"
// ]
// let answers = []
// // This writes directly to the console
// function ask(i) {
//   process.stdout.write(`\n\n ${questions[i]}`);
//   process.stdout.write("   >   ")
// }

// process.stdin.on('data', data =>  {
//   answers.push(data.toString().trim() + "\n")
//   if (answers.length < questions.length) {
//     ask(answers.length);
//   } else {
//     process.exit();
//   }
// })
// process.on('exit', function() {
//   process.stdout.write(" \n\n ")
//   process.stdout.write(`Go ${answers[0]} ${answers[1]}`)
// })
// ask(0)
// */

// // practicing madlibs

// class MadLibs {
//   constructor(story, name, adjective1, adjective2, noun1, noun2, noun3, adverb) {
//     this.story = story
//     this.name = name
//     this.adjective1 = adjective1
//     this.adjective2 = adjective2
//     this.noun1 = noun1
//     this.noun2 = noun2
//     this.noun3 = noun3
//     this.adverb = adverb
//     this.randomNum = Math.floor((Math.random() * 10) + 1) % 2
//     // Getters and setters 
//     function Closerure(x) {
//       return function (v) {
//         if (v == undefined) {
//           return x;
//         } else {
//           val = v;
//         }
//       };
//     }

//     let readline = require('readline');
//     let rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout

//     });
//   }

//   makeStory() {
//     let stars = Math.floor((Math.random() * 10000) + 1)
//     let num = this.randomNum
//     if (num == 0) {
//       this.story = "Jesse and her best friend " + this.name + " went to Disney World today! " +
//         "They saw a " + this.noun1 + " in a show at the Magic Kingdom " +
//         "and ate a " + this.Adjective1 + " feast for dinner. The next day I" +
//         " ran " + this.adverb + " to meet Mickey Mouse in his " + this.noun2 + " " +
//         "and then that night I gazed at the " + stars + " " +
//         this.adjective2 + " fireworks shooting from the " + this.noun1 + ".";

//     } else {
//       this.story = "Amanda and her frenemy " + this.name + " went to the zoo last summer. " +
//         "They saw a huge " + this.noun1 + " and a tiny little " + this.noun2 + ". That night" + " they decided to climb " + this.adverb + " into the " + this.adverb + " to get a closer look. " +
//         "The zoo was " + this.adjective1 + " at night, but they didn't care... " +
//         "until " + +" " + this.adjective2 + " apes yelled in their faces, making " +
//         "Amanda and " + this.name + " sprint all the way back home.";
//     }
//     console.log(this.story)
//   }

//   enterName() {
//     let readline = require('readline');
//     let rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout

//     });
//     rl.enterName("What's your name?  ", answer => {
//       this.name = (answer.trim())
//     })
//   }
//   enterNoun1() {
//     rl.noun1("Please provide a noun ", answer => {
//       this.noun1 = (answer.trim())
//     })
//   }
  
//   enterNoun2() {
//     rl.noun2("Please provide another noun ", answer => {
//       this.noun2= (answer.trim())
//     })
//   }
//   enterNoun3() {
//     rl.noun3("Please provide another noun ", answer => {
//       this.noun3= (answer.trim())
//     })
//   }
//   enterAdjective1() {
//     rl.adjective1("Please provide an adjective ", answer => {
//       this.adjective1 = (answer.trim())
//     })
//   }
//   enterAdjective2() {
//     rl.adjective2("Please provide another adjective ", answer => {
//       this.adjective2 = (answer.trim())
//     })
//   }
//   enterAdjective3() {
//     rl.adjective3("Please provide an adjective ", answer => {
//       this.adjective3 = (answer.trim())
//     })
//   }
//   enterAdverbs() {
//     rl.adjective3("Please provide an adverb ", answer => {
//       this.adverb = (answer.trim())
//     })
//   }
//   instructions() {
//     console.log("Welcome to the MadLibs game." + "\n" + "If you type in words, we'll give you a story. " + "\n" + "Start by typing a name")
//   }
//   startGame() {
//     this.enterName()
//     this.enterNoun3()
//     this.enterNoun2()
//     this.enterNoun2()
//     this.adjective1()
//     this.adjective2()
//     this.adjective3()
//     this.adverb()
//       rl.close()

//       rl.on('close', function () {
//         makeStory()
//         process.exit()
//       })
//     };

 
// }



// game = new MadLibs

// game.instructions()
// game.startGame()