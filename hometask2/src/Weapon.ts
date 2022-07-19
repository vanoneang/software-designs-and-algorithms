import { Item } from "./Item";

export abstract class Weapon extends Item {
  static MODIFIER_CHANGE_RATE: number = 0.05;
  static MAX_DURABILITY: number = 1

  private baseDamage: number;
  private damageModifier: number;
  private baseDurability: number;
  private durabilityModifier: number;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number){
    super(name, value, weight);

    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  abstract polish(): void;

  getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getBaseDamage(): number {
    return this.baseDamage;
  }

  getDamageModifier(): number {
    return this.damageModifier;
  }

  setDamageModifier(damageModifier: number): void {
    this.damageModifier = damageModifier;
  }

  getDurability(): number {
    const currentDurability = this.baseDurability + this.durabilityModifier
    return currentDurability > Weapon.MAX_DURABILITY ? Weapon.MAX_DURABILITY : currentDurability;
  }

  getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  setDurabilityModifier(durabilityModifier: number): void {
    this.durabilityModifier = durabilityModifier
  }

  toString(): string {
    const name: string = this.getName();
    const value: number = this.getValue();
    const weight: string = this.getWeight().toFixed(2);
    const damage: string = this.getDamage().toFixed(2);
    const durability: string = (this.getDurability() * 100).toFixed(2);

    return `${name} − Value: ${value}, Weight : ${weight} , Damage : ${damage}, Durability : ${durability}%`;
  }

  use(): string {
    if (this.getDurability() <= 0) {
      return `You can't use the hammer , it is broken.`;
    }

    const name: string = this.getName();
    const damage: string = this.getDamage().toFixed(2);

    this.baseDurability -= Weapon.MODIFIER_CHANGE_RATE;

    const breakMessage: string = this.getDurability() > 0 ? '' : `The hammer breaks.`;

    return `You use the ${name} , dealing ${damage} points of damage. ${breakMessage}`;
  }
}