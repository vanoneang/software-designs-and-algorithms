import { Pack } from "./Pack";

export interface IState {
  shipmentId: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;

  fragile: boolean;
  doNotLeave: boolean;
  returnReceiptRequested: boolean;
}

export interface IShipper {
  getCost(pack: Pack): number;
}

export enum PackType {
  LETTER = 'LETTER',
  PACKAGE = 'PACKAGE',
  OVERSIZE = 'OVERSIZE'
}
