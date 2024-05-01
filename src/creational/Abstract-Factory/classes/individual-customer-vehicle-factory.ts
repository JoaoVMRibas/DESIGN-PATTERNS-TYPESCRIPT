import { CustomerProtocol } from "../interfaces/customer-protocol";
import { CreateCustomerVehicleFactoryProtocol } from "../interfaces/customer-vehicle-factory-protocol";
import { VehicleProtocol } from "../interfaces/vehicle-protocol";
import { IndividualCar } from "./individual-car";
import { IndividualCustomer } from "./individual-customer";

export class IndividualCreateCustomerVehicleFactory
  implements CreateCustomerVehicleFactoryProtocol
{
  createCustomer(customerName: string): CustomerProtocol {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
