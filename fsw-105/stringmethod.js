

function capilizeAndLowercase(string){
    var str=string.toUpperCase()
    var subStr=string.toLowerCase()
    console.log(subStr)
    console.log(str)
    console.log(str + subStr)
}

capilizeAndLowercase("hello")

function findMiddleIndex(string){
    var str2= string.length
    console.log(Math.floor(str2 / 2))}

    console.log("------")
    findMiddleIndex("Hello")

    function findMiddleIndex(string){
        var str2= string.length
        console.log(Math.floor(str2 / 2))}
    
        console.log("------") 
        findMiddleIndex("Hello World")

    function returnFirstHalf(string){
        var str3=string.length
        console.log(string.slice(0, Math.floor(str3 / 2)))

    }
    console.log("------")
    returnFirstHalf("Hello")

    function returnFirstHalf(string){
        var str3=string.length
        console.log(string.slice(0, Math.floor(str3 / 2)))
        
    }
    console.log("------")
    returnFirstHalf("Hello World")

    function capilizeAndLowercase2(string){
        
        var str4=string.length
        var subStr2=string.slice(0,Math.floor(str4 /2) )
        var upper=subStr2.toUpperCase()
        var subStr3=string.slice(Math.floor(str4 /2))
        var lower=subStr3.toLowerCase()
        console.log(upper +lower)
    }
    console.log("------")
    capilizeAndLowercase2("hello")



    function capilizeAndLowercase2(string){
        
        var str4=string.length
        var subStr2=string.slice(0,Math.floor(str4 /2) )
        var upper=subStr2.toUpperCase()
        var subStr3=string.slice(Math.floor(str4 /2))
        var lower=subStr3.toLowerCase()
        console.log(upper +lower)
    }
    console.log("------")
    capilizeAndLowercase2("Hello World")