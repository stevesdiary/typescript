const book = {
   title: "The Title",
   authors: ["John", "Mark", "Rob"],
   read(){
      console.log(this);
   },
   
   printAuthors(){
      this.authors.forEach(function(author:string){
         console.log(this.title, '-', author)
      }, this)
   }
}
book.printAuthors()