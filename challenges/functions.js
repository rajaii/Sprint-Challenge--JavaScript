// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(para1, para2, cb) {
  return cb(para1, para2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns 
  * "Hello first-name last-name, nice to meet you!"
*/
function add(x, y) {
  console.log(x + y);
  return x + y;
}
function multiply(x, y) {
  console.log(x * y);
  return x * y;
}
function greeting(fName, lName) {
  console.log(`Hello ${fName} ${lName}, nice to meet you!`);
  return `Hello ${fName} ${lName}, nice to meet you!`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: nestedfunction() is a closure.  When a closure is created it can access variables that are outside of its 
//scope, but not within its scope.  So it can access internal because it is a level up from its scope.  On the contrary 
//if we had a nestedfunction2() within its scope it wouldn't be able to do so.  Furthermore nestedfunction() has its own 
//separate memory space as a closure and when called can itself remember provious values from previous calls ie. if it were
//an incrementor function it could increment and remember previos increments, and thus add up as you call it.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();