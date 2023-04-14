const book = {
   title: "The Title",
   authors: ["John", "Mark", "Rob"],
   read(){
      console.log(this);
   },
   
   printAuthors(){
      this.authors.forEach((author:string)=>{
         console.log(this.title, '-', author)
      })
   }
}
book.printAuthors()