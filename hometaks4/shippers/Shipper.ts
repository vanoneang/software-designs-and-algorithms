import { Pack } from "../Pack";
import { IShipper } from "../types";

export class Shipper {
  private strategy: IShipper;

  constructor(strategy: IShipper) {
    this.strategy = strategy;
  }

  public getCost(pack: Pack): number {
    return this.strategy.getCost(pack);
  }
}