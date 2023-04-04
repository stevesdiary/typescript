//Introduction to Accessors and Mutators (the 'getters' and 'setters')
class Person {
   private _age: number | undefined;
   constructor(protected name: string) {
}
   public getName(){
      return this.name;
   }
   public set age(age: number) {
      if(age > 200 || age < 0){
         throw new Error('The age must be within range of 0 and 200')
      }
      this._age = age
   }
}

const person: Person = new Person("John");

const mark: Person = new Person("Mark");



//person.name = "Mark"; //modifies the name of the person "John" to "Mark"
console.log(person);
console.log(mark)