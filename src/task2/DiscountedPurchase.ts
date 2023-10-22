import { OrderItem } from "./OrderItem";
import { Product } from "./product";

export class DiscountedPurchase extends OrderItem {
   constructor(product: Product, quantity: number, public discount: number | string, public productsRequired: number) {
      super(product, quantity);
   }

   static isNumber(discount: number | string): discount is number {
      return typeof discount === "number";
   }

   public override getCost(): number {
      if (this.quantity >= this.productsRequired) {
         if (!DiscountedPurchase.isNumber(this.discount)){
            const discount = Number(this.discount.slice(0, -1));
            return Math.floor(this.product.cost - 1/discount*this.product.cost) * this.quantity;
         }
         return (this.product.cost - this.discount) * this.quantity;
      }
      return this.product.cost * this.quantity
   }
}
