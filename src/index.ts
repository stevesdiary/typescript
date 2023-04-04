class User {
   name: string;
   email: string;
   age: number;

   constructor(name: string, email: string, age: number) {
      this.name = name;
      this.email = email;
      this.age = age;
   }
}
//'extends' keyword is used to inheriit properties from a parent class

class AdminUser extends User {
   isAdmin: boolean = true;
}

const user: User = new User("John", "john@email.com", 23);
const admin: AdminUser = new AdminUser("Danny", "dannyboy@email.com", 34)

console.log(user)
console.log(admin)

//the result of the expression shows that the user properties are inherited from the user class 
//and for the admin, there is an additional property 'isAdmin' which was included in the properties