import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  private numberOfSlices: number;
  private slicesEaten: number = 0;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super('pizza', 0, 0, spoiled);

    this.numberOfSlices = numberOfSlices;
  }

  eat(): string {
      if (this.slicesEaten < this.numberOfSlices) {
        this.slicesEaten++;

        return 'You eat a slice of the pizza.';
      }
      
      this.setConsumed(true);
      return '';
  }
}