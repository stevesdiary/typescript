//Access modifiers in classes (public(can be used outside the class), protected(can be  accessed within the class and child class alone), private(can only be accessed within the parent class itself alone.))
class Person {
   name: string;
   age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }
}

let person : Person = new Person("John", 32);
person.name = "Mark"; //modifies the name of the person "John" to "Mark"
console.log(person);