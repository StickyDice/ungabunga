import { OrderItem } from "./OrderItem";
import { Product } from "./product";

export class DeliveryPurchase extends OrderItem {
   constructor(product: Product, quantity: number, public deliveryCost: number) {
      super(product, quantity);
   }

   public override getCost(): number {
      return (this.product.cost + this.deliveryCost) * this.quantity;
   }
}
