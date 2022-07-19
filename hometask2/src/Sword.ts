import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('sword', baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    const currentDamage = this.getDamage();
    const baseDamage = this.getBaseDamage();
    const polishedDamageModifier: number = this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE;

    if (currentDamage < baseDamage * 1.25 ) {
        this.setDamageModifier(polishedDamageModifier);
    }
  }
}