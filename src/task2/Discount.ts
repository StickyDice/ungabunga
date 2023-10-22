import { Product } from "./product";
import { OrderItem } from "./OrderItem";

export class Discount extends OrderItem {
   constructor(product: Product, quantity: number, public discount: number | string) {
      super(product, quantity);
   }

   static isNumber(discount: number | string): discount is number {
      return typeof discount === "number";
   }

   public override getCost(): number {
      if (!Discount.isNumber(this.discount)){
         const discount = Number(this.discount.slice(0, -1));
         return Math.floor((this.product.cost - 1/discount*this.product.cost)) * this._quantity;
      }
      return (this.product.cost - this.discount) * this._quantity;
   }
}

