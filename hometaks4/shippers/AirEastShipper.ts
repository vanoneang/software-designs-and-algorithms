import { Pack } from '../Pack'
import { IShipper, PackType } from '../types'

export class AirEastShipper implements IShipper {
  public getCost(pack: Pack): number {
    const { weight, type } = pack

    switch (type) {
      case PackType.LETTER:
        return this.getLetterCost(weight)

      case PackType.PACKAGE:
        return this.getPackageCost(weight)

      case PackType.OVERSIZE:
        return this.getOversizeCost(weight)
    }
  }

  private getLetterCost(weight: number): number {
    return weight * 0.39
  }

  private getPackageCost(weight: number): number {
    return weight * 0.25
  }

  private getOversizeCost(weight: number): number {
    return this.getPackageCost(weight) + 10
  }
}
