//Protected Constructor and Child Classes
type Holidays = {
   date: Date;
   reason: string;
}[];

abstract class Department {
   protected abstract holidays: Holidays;
   protected constructor(protected name: string){}

   public addHolidays(holidays: Holidays){
      if (Array.isArray(holidays)){
         for(const holiday of holidays){
            this.holidays.push(holiday);
         }
      }
   }
}

class ItDepartment extends Department {
   protected holidays: Holidays = [];

   constructor(){
      super("It Department");
   }
}
class AdminHoliday extends Department {
   protected holidays: Holidays = [];
}