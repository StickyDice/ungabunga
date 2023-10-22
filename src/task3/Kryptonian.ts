import { CanFly, CanRun, CanSwim } from "./can";

abstract class Kryptonian implements CanSwim, CanFly, CanRun {
   public swim(): void {};

   public run(): void {};

   public fly(): void {};
}
