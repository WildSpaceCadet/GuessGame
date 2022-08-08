let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Your guess is too high!");
  } else {
    guess = prompt("Your guess is too low!");
  }
}
if(guess=== 'q'){
  console.log('OK, You Quit!');
} else {
  console.log('Congrats, You Win!')
console.log(`You got it! It took you ${attempts} guesses`);
}
