// Returns a call back function
function myFirstFunction(){
    console.log("My first function");
}
function mySecondFunction(){
    console.log("My second function");
}
function myThirdFunction(){
    console.log("My third function");
}
function allFunctions(){
    receivesAFunction(myThirdFunction)
}
function receivesAFunction(callback){
    myFirstFunction();
    callback();
}
console.log(allFunctions())

// Returns a named function
function returnsANamedFunction(){
    return function namedFunction(){
       return "I am a named function";
    }
}
const named = returnsANamedFunction();
console.log(named())

// Returns an anonymous function
function returnsAnAnonymousFunction(){
    return function(){
        return "I am an anonymous function";
    }
}
const anon= returnsAnAnonymousFunction();
console.log(anon())