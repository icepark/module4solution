// Module 4 Assignment Solution>>>
// Useing an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program will say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program will say "Good Bye". So, the final output
// on the console will look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

// STEP 1: (ALREADY DONE)
// Wraping the entire contents of script.js inside of an IIFE

(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {

   var firstLetter = names[i].charAt(0).toLowerCase();

  
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
