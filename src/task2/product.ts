export class Product {
   constructor(
      private _name: string,
      private _cost: number,
   ) {
   }

   get name(): string {
      return this._name
   }

   set name(value: string) {
      this._name = value
   }

   get cost(): number {
      return this._cost
   }

   set cost(value: number) {
      this._cost = value
   }

   public log() {
      console.log(`${this.name}; ${this.cost}`);
   }
}
