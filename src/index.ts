const map = <T, U>(array: T[], func: (item: T) => U)=>{
   if(array.length === 0) {
      return array;
   }
   let result =[];

   for(let i = 0; i < array.length; i++) {
      result[i] = func(array[i]);
   }
   return result;
};

let numbers = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

const converted  = map(numbers, (num)=> num.toString());

console.log(converted)