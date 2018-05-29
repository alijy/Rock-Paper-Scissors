var yourWins = 0;
var computerWins = 0;
var rounds = 0;
var maxRounds = 5;
var moves = ['rock', 'paper', 'scissors'];

function play(round) {
  var input;
  if (round == 0) {
    alert("Let's play rock-paper-scissors!")
    input = prompt("Choose one of rock[r], paper[p] or scissors[s]:")
  } else {
    input = prompt("Results:   You: " + yourWins + "   Computer: " + computerWins +
    "\nChoose one of rock[r], paper[p] or scissors[s]:")
  }
  if (input == 'r') {input = 'rock';}
  if (input == 'p') {input = 'paper';}
  if (input == 's') {input = 'scissors';}
  return input.toLowerCase();
}

function moveGenerator() {
  var index = Math.floor(Math.random() * 3);
  return moves[index];
}

function lose(you, comp) {
  computerWins++;
  alert("Your Lost!    " + comp + " beats " + you);
}

function win(you, comp) {
  yourWins++;
  alert("Your Won!     " + you + " beats " + comp);
}

function tie(you) {
  alert("It's a tie!     " + you + " is " + you);
}

while (yourWins < 3 && computerWins < 3) {
  var you = play(rounds);
  var comp = moveGenerator();
  rounds++;
  if (you == 'rock') {
    switch (comp) {
      case 'paper':
        lose(you, comp);
        break;
      case 'scissors':
        win(you, comp);
        break;
      default:
        tie(you);
        break;
    }
  } else if (you == 'paper') {
    switch (comp) {
      case 'scissors':
        lose(you, comp);
        break;
      case 'rock':
        win(you, comp);
        break;
      default:
        tie(you);
        break;
    }
  } else if (you == 'scissors') {
    switch (comp) {
      case 'rock':
        lose(you, comp);
        break;
      case 'paper':
        win(you, comp);
        break;
      default:
        tie(you);
        break;
    }
  } else {
    alert("Obviously you're not a serious player!\nGoodbye!");
    break;
  }
}

if (yourWins == 3) {
  alert("You beat computer 3-" + computerWins + "!");
} else if (computerWins == 3) {
  alert("Computer beats you " + yourWins + "-3!");
}
