/*Hoisting is a JavaScript concept that refers to the process of moving declarations 
to the top of their scope. This means that variables and functions can be used before they are declared, as long as they are declared before they are used in a function*/

printHello();
// hello

function printHello() {
  printBye();

  console.log("hello");
  function printBye() {
    console.log("Bye");
  }
}
//Basava
