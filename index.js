function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function namedFunt() { 
        console.log('returnsANamedFunction is a function');
    };
}
const namedFunct = returnsANamedFunction();
namedFunct ();


function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function.");
    };
  }