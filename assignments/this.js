/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global Binding: Basically, the "this" keyword defaults to the window or console object in JS. You should be careful when using "this" because if you don't do it correctly, it might think that you are referring to the window object and it won't work. 
* 2. Implicit Binding: The meaning of "this" depends on the context in which it's run. Whenever a function is called by a preceding dot, "this" refers to the object left of/before the dot.
* 3. New Binding: When you use a new constructor, "this" refers to the specific instance of the object created and returned by the constructor function.
* 4. Explicit Binding: Whenever you use the .call or .apply methods, "this" is explicitly defined or binded to whatever object is called.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this); //just prints out the window object in the console.

// Principle 2

// code example for Implicit Binding

const implicitBindingExample = {
    name: "implicit binding", 
    lambdaLesson: "Javascript III",
    dayOfWeek: "Wednesday",
    speak: function() {
        console.log(`We learned about ${this.name} in ${this.lambdaLesson} on ${this.dayOfWeek}`)
    }
}

implicitBindingExample.speak();

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding