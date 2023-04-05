//Introduction to Accessors and Mutators (the 'getters' and 'setters')
class Person {
   private _age: number |undefined;
   constructor(protected name: string) {
}
   public getName(){
      return this.name;
   }
   //Set method can only have one parameter
   public set age(age: number) {
      if(age > 200 || age < 0){
         throw new Error('The age must be within range of 0 and 200')
      }
      this._age = age
   }
   //get accessors cannot have parameters
   public get age() {
      if (this._age === undefined) {
         throw new Error('The age property has not been set');
      }
      return this._age;
   }
}

const person: Person = new Person("John");
person.age = 70;


//person.name = "Mark"; //modifies the name of the person "John" to "Mark"
console.log(person.age);
console.log(person.getName());