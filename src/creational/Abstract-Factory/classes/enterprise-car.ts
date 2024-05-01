import { CustomerProtocol } from "../interfaces/customer-protocol";
import { VehicleProtocol } from "../interfaces/vehicle-protocol";

export class EnterpriseCar implements VehicleProtocol {
  constructor(
    public name: string,
    private readonly customer: CustomerProtocol,
  ) {}

  pickUp(): void {
    console.log(
      `${this.name} está buscando ${this.customer.name} (ENTERPRISE).`,
    );
  }
}
