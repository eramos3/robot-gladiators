var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10
};
console.log (playerInfo.name,playerInfo.health,playerInfo.attack);

//var enemy.name = "Roborto";
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

var fight = function(enemy) {
  console.log(enemy);
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    enemy.health = Math.max(0, enemy.health - playerInfo.attack);;
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  } else {
    window.alert("You've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");

    // ask player if they'd like to play again

  if (playAgainConfirm) {
    // restart the game
    startGame();
  }  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
 
}

var startGame = function() {
  // reset player stats
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 30;
    
  for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy.health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);


      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the fight(pickedEnemyObj); variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);      // if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemy.names.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      } 
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
  }
}

var shop = function() {
  console.log("entered the shop");
  // use switch to carry out action
  switch (shopOptionPrompt) {
    case "refill":
      if (playerInfo.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
    
        // increase health and decrease money
        playerInfo.health = playerInfo.health + 20;
        playerInfo.money = playerInfo.money - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
    
      break;
    case "upgrade":
      if (playerInfo.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
    
       // increase attack and decrease money
        playerInfo.attack = playerInfo.attack + 6;
        playerInfo.money = playerInfo.money - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
    
      break;
    case "leave":
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }
};
console.log (playerInfo.name,playerInfo.health,playerInfo.attack);

//var enemy.name = "Roborto";
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

startGame();
