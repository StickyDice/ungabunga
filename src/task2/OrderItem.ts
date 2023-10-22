import { Product } from "./product";

export abstract class OrderItem {
   constructor( protected _product: Product, protected _quantity: number ) {
   }

   get product(): Product {
      return this._product;
   }

   set product( value: Product ) {
      this._product = value;
   }

   get quantity(): number {
      return this._quantity;
   }

   set quantity( value: number ) {
      this._quantity = value;
   }

   public log() {
      this._product.log();
      `; ${this._quantity}`;
   }

   abstract getCost(): number;

   public compare( other: OrderItem ) {
      const thisCost = this.getCost();
      const otherCost = other.getCost();
      if (thisCost < otherCost) return -1;
      if (thisCost === otherCost) return 0;
      return 1;
   }
}
