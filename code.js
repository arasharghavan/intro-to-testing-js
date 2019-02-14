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
        return false;
    } else {return input.match(/[aeiou]/gi) !== null}

}


