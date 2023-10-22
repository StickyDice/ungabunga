export class Job {
   constructor( private role: string, private _salary: number ) {
   }

   get salary(): number {
      return this._salary;
   }

   public work( personName: string ): void {
      console.log(`${personName} сейчас работает как ${this.role}`);
   }
}

export class Person {
   private _job: Job | undefined;

   constructor( private name: string ) {
   }

   set job( newJob: Job ) {
      this._job = newJob;
   }

   public getSalary(): number {
      if (typeof this._job !== "undefined")
         return this._job.salary;
      return 0;
   }

   public work() {
      if (typeof this._job !== "undefined") {
         this._job.work(this.name);
      } else {
         console.log("Безработный(((");

      }
   }
}

const person1 = new Person("Игорь");
const person2 = new Person("Андрей");

const oilman = new Job("Нефтяник", 100);

const seller = new Job("Продавец", 10);

person1.job = oilman;
person2.job = seller;

person1.work();
person2.work();

const developer = new Job("Разработчик", 100500);
person1.job = developer;
person2.job = developer;

person1.work();
person2.work();
