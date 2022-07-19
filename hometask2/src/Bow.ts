import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('bow', baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    const currentDurability = this.getDurability();
    const polishedDurabilityModifierModifier: number = this.getDurabilityModifier() + Weapon.MODIFIER_CHANGE_RATE;

    if (currentDurability < Weapon.MAX_DURABILITY) {
      this.setDurabilityModifier(polishedDurabilityModifierModifier);
    }
  }
}