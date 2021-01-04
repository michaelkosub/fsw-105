var readlineSync = require('readline-sync');
var Players = readlineSync.question('What is your name? ');

var message = `Welcome, ${Players}, welcome to the escape roome! `;
console.log(message)

var alive = true;
var hasKey = false;



while (alive == true){
    let player = readlineSync.keyIn(`press 3 to put hand in hole \n press 1 to find the key \n press 2 to open the door`, {limit: "$<1 - 3>"});
    if (player == 3 ){
        console.log(`${Players} you are DEAD GAME IS OVER`);
        alive=false;
    }
     if (player == 1 && hasKey == false){
        console.log(`${Players} you have found the key, go to the next option`);
    }
     if (player == 1 && hasKey == true){
        console.log(`${Players} You already have the key, go to the next menu option`);
    }
     if (player == 2 && hasKey == false){
        console.log(`${Players} You have to find the key first `);
    }
     if (player == 2 && hasKey == true){
        console.log(`${Players} You opened the door. GAME ENDS......`);
        alive = false
    }

}