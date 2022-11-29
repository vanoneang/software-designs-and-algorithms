import { Shipment } from "./Shipment";
import { IState } from "./types";

export class Client {
  ship(state: IState) {
    const shipment = Shipment.getInstance(state)
    console.log(shipment.ship())
  }
}