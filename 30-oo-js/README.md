# Inheritance
* Inheritance is when a class formally extends another class.
* A sub-class has access to all the methods of it's parent class.
* A sub-class can override methods in the parent class.
* Sometimes Inheritance can lead to complicated hierachys where
  you end up trying to fit square pegs in round holes.

# Composition
* An alternative to Inheritance is Composition
* Instead of relying on a programming language to give you formal
  extends inheritance syntax you can make use of other classes manually.
* Create an instance of another class and save it as a property
  of your new class
* Manually call methods and access properties of the other class
  whenever you want that other class's functionality.
* You "compose" a new class out of another class, or other classes.
* Composition may require more work to rewrite methods that manually
  invoke methods from the other class
* An advantage of composition is it allows you to pick different
  pieces and parts of classes and use just what you need and not
  be forced into inheriting everything

# Opinions
* Some people say "favor composition over inheritance"
* Now you know both.
* Try for yourself.
* [Favor Composition Over Inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance)