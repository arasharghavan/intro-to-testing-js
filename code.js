// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === true){return ("hello, world!");}
    else if (input === false){return ("hello, world");}
    else{return ("hello, " + input + "!");}
}

function isFive() {
    return true;
}


function isEven(input) {
    return input % 2 === 0 && input !== true && input !== false;
}


function isVowel(input) {
    if (typeof input !== "string" || input === "" ){
        return false;}
       else if (input.length > 0 ){return input.charAt(0).match(/[aeiou]/gi) !== null}
}


function isAdd(input1, input2) {
    var sum = +input1 + +input2;
    if (!isNaN(sum)) {
        return sum;
    }else if(isNaN(sum)){
        return isNaN;
    }
}