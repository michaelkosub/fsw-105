function add(par1 , par2){
    console.log(par1+par2)
}add(1,2)

function sum(num1,num2,num3){
    console.log(Math.max(num1, num2, num3));
}
sum(30,60,20)

function numEven(num1){
    if(num1%2 == 0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
numEven(10)

function lastOne(par4){
    if(par4.length  <= 20){
        console.log(par4+par4)
    }
    else{
       console.log (par4.slice(0, par4.length / 2))
            
        
    }
}
lastOne("photolithographically")