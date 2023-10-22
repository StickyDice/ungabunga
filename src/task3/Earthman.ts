import { CanRun, CanSwim } from "./can";

abstract class Earthman implements CanRun, CanSwim {
   public run(): void {};

   public swim(): void {};
}
