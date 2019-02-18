/*
*
* Homework Assignment #12: Object Oriented Programming
*
 */
/*
The Constructor
The constructor is called at the moment of instantiation (the moment when the object instance is created).
The constructor is a method of the class. In JavaScript, the function serves as the constructor of the object;
therefore, there is no need to explicitly define a constructor method. Every action declared in the
class gets executed at the time of instantiation.
The constructor is used to set the object’s properties or to call methods to prepare the object for use.
Adding class methods and their definitions occurs using a different syntax described later in this article.
 */
//The constructor is called at the moment of instantiation (the moment when the object instance is created).
// The constructor is a method of the class. In JavaScript, the function serves as the constructor of the object;
// therefore, there is no need to explicitly define a constructor method. Every action declared in the
// class gets executed at the time of instantiation.
// The constructor is used to set the object’s properties or to call methods to prepare the object for use.
// Adding class methods and their definitions occurs using a different syntax described later in this article.
function Mammal(name,lifeSpan,diet) {
         this.name = name;
         this.lifeSpan = lifeSpan;
         this.diet = diet;
         this.voice = function () {
             console.log(`Mammal ${this.name} can make voice !!`);
         };
}

//Instantiate simple Mammal object
let dog = new Mammal("Dog",15,"omnivores");
/*
Inheritance
Inheritance is a way to create a class as a specialized version of one or more classes (
JavaScript only supports single class inheritance). The specialized class is commonly called the child,
and the other class is commonly called the parent. In JavaScript you do this by assigning an instance of
the parent class to the child class, and then specializing it.
Note: JavaScript does not detect the child class prototype.constructor see Object:prototype property,
so we must state that manually.
 */
//dog is instant of Mammal, it has all properties and method from Mammal.
console.log(`Mammal name is ${dog.name} \n It's life span ${dog.lifeSpan} years \n It is ${dog.diet}`);
// call function inherited from Mammal
dog.voice();
//here inheritance from Mmmal
function Man(name,lifeSpan,diet, isIntaligennt){
    Mammal.call(this,name,lifeSpan,diet);
    this.isteligent = isIntaligennt;
}


/*
Prototype-based programming
Prototype-based programming is a style of object-oriented programming in which classes are not present,
and behavior reuse (known as inheritance in class-based languages) is accomplished through a process of
decorating existing objects which serve as prototypes.
This model is also known as class-less, prototype-oriented, or instance-based programming.

The original (and most canonical) example of a prototype-based language is the programming language Self developed by David Ungar and Randall Smith. However, the class-less programming style has recently grown increasingly popular, and has been adopted for programming languages such as JavaScript, Cecil, NewtonScript, Io, MOO, REBOL, Kevo, Squeak (when using the Viewer framework to manipulate Morphic components), and several others.1

 */
//you can add properties and methods later in main Object
Mammal.prototype.habitat = "everywhere";
//now check in dog object, it's habitat
console.log(dog.habitat);
// now change, later added property in Mammal and inherited in dog object
dog.habitat = "Around human Habitat";

console.log(dog.habitat);
// Same way you can add in Mammal object a new method
Mammal.prototype.swim = function () {
  console.log(`${this.name} can swim!!`);
};
dog.swim();


//Encapsulation
/*
In the previous example, dog does not need to know how the Mammal class’s voice() method is
implemented, but still can use that method; the dog class doesn’t need to explicitly define
that method unless we want to change it. This is called encapsulation, by which every class inherits
the methods of its parent and only needs to define things it wishes to change.
*/

/*
Notes
The techniques presented in this article to implement object-oriented programming are not the only
ones that can be used in JavaScript, which is very flexible in terms of how object-oriented programming
can be performed.
Similarly, the techniques shown here do not use any language hacks,
nor do they mimic other languages’ object theory implementations.
 */
