var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
var count = 0;


for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer"){
        count++;
    }
}
console.log(count); // -> 4

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

function isOldEnough() {
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log("old enough")
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
            console.log( "is not old enough");
        }
        
    }

}
console.log("-----------")
isOldEnough()

function isOldEnoughWithName() {
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough to see Mad Max");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max");
        }
    }

}

console.log("-----------")
isOldEnoughWithName()


function letThemIn() {
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {

        
       
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough  " + (peopleWhoWantToSeeMadMaxFuryRoad[i].gender ==="male"?"he":"she") + "'s good  to see Mad Max Fury Road");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, dont't let " + (peopleWhoWantToSeeMadMaxFuryRoad[i].gender ==="female"?"her":"him") +" in.")
        }
        
    }

}

console.log("------------")

letThemIn()



function number(){
    for(i = 0; i < 102; i++){
    if(i % 2 === 0){
        console.log(i+"  is even");
    }
    else{
        console.log(i+" is odd");
    }
    }
}
console.log("-----------")
number()


