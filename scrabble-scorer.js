// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
  function simpleAlgo(word)
  {
    word = word.toUpperCase();
   let letterPoints="";
    simpleScore=0;
   
   for(let i=0;i<word.length;i++){
   
   letterPoints += `Points for '${word[i]}': 1\n`
   simpleScore += 1

   }
 return simpleScore;
  }
  


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
//let input1;
function initialPrompt() {
   console.log("Let's play some scrabble!")
    oldScore=input.question(" \n\nEnter a word to score: ");
};

let simpleScore;


let vowelBonusScore=function(word)
{
word = word.toUpperCase();
   let letterPoints="";
   let vowel=0;
   let conso=0;
   vowelBonusScore1=0;
   for(let i=0;i<word.length;i++){
   if(word[i]=='A'||word[i]=='E'||word[i]=='I'||word[i]=='O'||word[i]=='U')
   {
   letterPoints += `Points for '${word[i]}': 3\n`
   vowel += 3
   //console.log(letterPoints+vowel)
   }
   else
   {
     letterPoints += `Points for '${word[i]}': 1\n`
   conso +=1
   //console.log(letterPoints+conso)
   }
   }
   vowelBonusScore1=vowel+conso;
 return vowelBonusScore1;
  
  }




let scrabbleScore;

let oldScore;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   console.log(oldScrabbleScorer(oldScore))
   console.log(simpleAlgo(oldScore))
   console.log(vowelBonusScore(oldScore))
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

