interface Fly {
   fly: () => void;
}

interface Swim {
   swim: () => void;
}

interface Run {
   run: () => void;
}

abstract class Human implements Fly, Run, Swim {
   public fly(): void {
   };

   public run(): void {
   };

   public swim(): void {
   };
}
