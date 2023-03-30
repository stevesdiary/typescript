"use strict";
// //Function overload
// type Filter = {
//    (array: number[], predicate: (item: number) => boolean): number[];
//    (array: string[], predicate: (item: string) => boolean): string[];
//    (array: object[], predicate: (item: object) => boolean): object[];
// }
// function filter(array: any[], predicate: Function ) {
//    let result = [];
//    for (let i = 0; i < array.length; i++) {
//       let item = array[i];
//       if (predicate(item)) {
//          result.push(item);
//       }
//    }
//    return result;
// }
// let numbers = [1,2,3,4,5,6,7,8,9,10,12]
// function greaterThanSeven(item: number){
//    return item >7
// }
// console.log(filter(numbers,greaterThanSeven));
// let animals = ["cat", "dog", "goat", "lion", "horse", "rat"]
// function filterCats(item: string){
//    return item === "cat";
// }
// console.log(filter(animals, filterCats));
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        console.log("name: " + name);
        console.log("email: " + email);
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
const person = new Person("John", "john@email.com");
const person2 = new Person("Mark", "mark@email.com");
console.log(person);
console.log(person2);
console.log(person.greet());
console.log(person2.greet());
