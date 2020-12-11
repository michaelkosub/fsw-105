var shopper = {
    firstName: "Mike",
    lastName:"Smith",
    title:"Grocery List",
    ShoppingTime: 1500,
    hascreditcard: true,
    Grocerycart: ["potatoes", "hambergermeat", "grapes" ],
    fullName : function() {
        return this.firstName + " " + this.lastName + " Grocery List ";
      }
}

console.log(shopper.fullName());