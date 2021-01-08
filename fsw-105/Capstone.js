var readlineSync = require(`readline-sync`);
var Players = readlineSync.question('What is your name? ');

readlineSync.question(` Hello `+ Players +`, Welcome to the 1985 GAMES! Where you will risk your life to defeat evil. Press ENTER to start the Game. `);

var enemies = [`Grizzly Bear`, `Moutain Lion`, `Zombie`];
var treasure = [`Hathet`, `First Aid`, `Armor`];
let playerHP = 100;
var prize =[];
var options = [`walk`, `exit`, `print`];
let choseOne = treasure[Math.floor(Math.random() * treasure.length)];

function RPG(){
    var attackPower = Math.floor(Math.random() * (5 - 4 + 3) +5)
    var enemy = enemies[Math.floor(Math.random() * enemies.length)]
    let enemiesHP = 50;
    var enemiesPower = Math.floor(Math.random() * (5 - 3 + 2) +5)

    var index = readlineSync.keyInSelect(options, `What do you want to do now?`)

    if(options[index] == `exit`){
        return playerHP = 0;
    }
     else if (options[index] == `print`){
         console.log(Players + `: \n` + playerHP + `\nTreasure: ` + choseOne)

    }
    else if (options[index] == `walk`){
        let key = Math.random();
        if(key <= .4) {
          console.log( "walking.....")  
        }
    else if (key >= .4){
        console.log(enemies + " Showed up. ")

        while (enemiesHP > 0 && playerHP > 0){
            var user = readlineSync.question( `What would you like to do? Enter "r" to run or press "a" to Attack the oppenent: `)
             switch(user){
                 case `r`:
                     var run = Math.random();
                     if (run < .6){
                         console.log("Before you can fun away " +enemy+ " Attacks you with: " + enemiesPower)
                     }
                     else {
                         
                        return console.log("You ran away.");
                         
                     }
                case `a`:
                    enemiesHP -= attackPower; 
                    console.log("You Attacked " +enemy+ "with" +enemiesPower+ "attack power" );

                    playerHP -= enemiesPower;
                    console.log("The Oppenent just attacked you with: " +enemiesPower+ "attack power");
                    var loot= Math.random()
                    if (enemiesHP <= 0){
                        console.log("You Killed " + enemy+ "\n" +enemy+ "left " +choseOne);
                        if (loot <= .4) {
                            prize.push(choseOne);
                        }
                        }
                        else if (playerHP <= 0){
                            console.log(enemy + "has killed you. Game over. ");
                        }

             }
        }
    }
    }
}

while(playerHP > 0){
    userRestore = function(){
        userActive = true;
        playerHP = 100;
    }
    userRestore();
    RPG();
}