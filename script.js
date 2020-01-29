"use script";
//arrow function randomDamage with no parameters
const randomDamage = _ => Math.floor(Math.random() * 10 + 1);
console.log(randomDamage());

// arrow function chooseOption
const chooseOption = (opt1, opt2) => {
  let randNum = Math.round(Math.random());
  return randNum === 0 ? opt1 : opt2;
};

//attackPlayer function
const attackPlayer = function(health) {
  return health - randomDamage();
};

//arrow function logHealth
const logHealth = (player, health) => {
  console.log(`${player} health:${health}`);
};

// arrow function logDeath
const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

// arrow function isDead
const isDead = function(health) {
  return health <= 0 ? true : false;
};

//function declaration fight
function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health) === true) {
        logDeath(player1, player2);
        break;
      }
    }
  }
}

fight("Crystal", "Kristian", 100, 100);
