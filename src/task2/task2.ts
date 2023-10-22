import { Discount } from "./Discount";
import { DiscountedPurchase } from "./DiscountedPurchase";
import { DeliveryPurchase } from "./DeliveryPurchase";
import { Product } from "./product";
import { OrderItem } from "./OrderItem";

const product1 = new Product("Тумба", 1000);
const product2 = new Product("Холодильник", 10000);
const product3 = new Product("Стол", 5000);
const product4 = new Product("Стул", 1000);
const product5 = new Product("Шкаф", 3000);
const product6 = new Product("Полка", 2000);

const purchases = [
   new Discount(product1, 10, 500),
   new Discount(product2, 10, "50%"),
   new DiscountedPurchase(product3, 10, 500, 5),
   new DiscountedPurchase(product4, 10, "50%", 20),
   new DeliveryPurchase(product5, 10, 0),
   new DeliveryPurchase(product6, 10, 500),
]

for (const product of purchases) {
   product.log();
}
console.log("-----------------------")
purchases.sort((a: OrderItem, b: OrderItem) => a.compare(b));

for (const product of purchases) {
   product.log();
}
