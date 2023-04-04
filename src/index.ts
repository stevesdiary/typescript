// let person = {
//    name: 'John',
//    email: 'john@example.com',
//    greet: () => console.log(`Hello ${person.name}`),
// };
// console.log(`Hello ${person.name}`);

//Creating instance of class
class Person {
   name: string;
   email: string;
//'this' keyword used in the classs refers to the class to make the properties available in the constructor as well.

   constructor(name: string, email: string){
      this.name = name;
      this.email = email;
      // console.log("name: " + this.name);
      // console.log("email: " + this.email);
   }
   greet() {
      return `Hello ${this.name}`;
   }
}

const person = new Person('John', 'john@email.com');
const person2 = new Person('Mark', 'mark@email.com');
console.log(person);
console.log(person2);


console.log(person.greet());
console.log(person2.greet());