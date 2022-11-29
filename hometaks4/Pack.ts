import { IState, PackType } from "./types";

const LETTER_MAX_WEIGHT = 15
const PACKAGE_MAX_WEIGHT = 160

export class Pack {
  public weight: number
  public type: PackType

  constructor(weight: number) {
    this.weight = weight
    this.type = this.getPackType()
  }

  private getPackType(): PackType {
    if (this.weight <= LETTER_MAX_WEIGHT) {
      return PackType.LETTER
    }

    if (this.weight <= PACKAGE_MAX_WEIGHT) {
      return PackType.PACKAGE
    }

    return PackType.OVERSIZE
  }
}