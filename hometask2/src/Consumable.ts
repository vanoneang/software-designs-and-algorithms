import { Item } from "./Item";

export abstract class Consumable extends Item {
  private consumed: boolean = false;
  private spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);

    this.spoiled = spoiled;
  }

  abstract eat(): string;

  use(): string {
    if (!this.isConsumed() && !this.isSpoiled()) {
      return this.eat();
    }

    if (this.isConsumed()) {
      return `There is nothing left of the ${this.getName()} to consume.`
    }

    const spoiledMessage: string = this.isSpoiled() ? `\nYou fell sick.` : '';
    return `You eat the ${this.getName()}.${spoiledMessage}`;
  }

  isConsumed(): boolean {
    return this.consumed;
  }

  isSpoiled(): boolean {
    return this.spoiled;
  }

  setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }
}