import { Pack } from "./Pack"
import { AirEastShipper } from "./shippers/AirEastShipper"
import { ChicagoSprintShipper } from "./shippers/ChicagoSprintShipper"
import { PacificParcelShipper } from "./shippers/PacificParcelShipper"
import { IShipper, IState } from "./types"

const AIR_EAST_ZIP_CODES = [1, 2, 3]
const CHICAGO_SPRINT_ZIP_CODES = [4, 5, 6]
const PACIFIC_PARCEL_ZIP_CODES = [7, 8, 9]

export class Shipment {
  private static instance: Shipment
  private static id = 0

  private state: IState
  private shipperStrategy: IShipper

  private constructor(state: IState) {
    this.state = state
    this.shipperStrategy = this.getShipperByZipCode()
  }

  static getInstance(state: IState): Shipment {
    if (!this.instance) {
      this.instance =  new Shipment(state)
    }
    return this.instance
  }

  getShipmentId(): string {
    Shipment.id++

    return String(this.state.shipmentId || Shipment.id)
  }

  ship(): string{
    const from = `${this.state.fromAddress}, ${this.state.fromZipCode}`
    const to = `${this.state.toAddress}, ${this.state.toZipCode}`

    return `Shipment with the ID ${this.getShipmentId()} will be picked up from ${from} and shipped to ${to}
    \nCost = ${this.getCost()} ${this.getMarks()}`
  }

  private getMarks(): string {
    let marks = ''
    if (this.state.fragile) {
      marks += '\n**MARK FRAGILE**';
    }
    if (this.state.doNotLeave) {
      marks += '\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**';
    }
    if (this.state.returnReceiptRequested) {
      marks += '\n**MARK RETURN RECEIPT REQUESTED**';
    }
    return marks
  }

  private getShipperByZipCode(): IShipper {
    const firstDigitFromZip = +this.state.fromZipCode[0]

    if (AIR_EAST_ZIP_CODES.includes(firstDigitFromZip)) {
      return new AirEastShipper()
    }

    if (CHICAGO_SPRINT_ZIP_CODES.includes(firstDigitFromZip)) {
      return new ChicagoSprintShipper()
    }

    if (PACIFIC_PARCEL_ZIP_CODES.includes(firstDigitFromZip)) {
      return new PacificParcelShipper()
    }

    throw new Error('Wrong shipper!')
  }

  private getCost(): number {
    const pack = new Pack(this.state.weight)
    return this.shipperStrategy.getCost(pack)
  }
}