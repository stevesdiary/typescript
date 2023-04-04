//Access modifiers in classes (
   //public(can be used outside the class), 
   //protected(can be  accessed within the class and child class alone), 
   //private(can only be accessed within the parent class itself alone.)
   //)
class Person {
   protected name: string;
   public age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }
   public getName(){
      return this.name;
   }
}

class Admin extends Person {
   public returnName(){
      return this.name;
   }
}

const admin: Admin = new Admin("Mark", 42);

let person : Person = new Person("John", 32);
//person.name = "Mark"; //modifies the name of the person "John" to "Mark"
console.log(person);
console.log(admin.returnName())