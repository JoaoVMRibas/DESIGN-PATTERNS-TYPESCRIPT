import { CustomerProtocol } from "../interfaces/customer-protocol";
import { CreateCustomerVehicleFactoryProtocol } from "../interfaces/customer-vehicle-factory-protocol";
import { VehicleProtocol } from "../interfaces/vehicle-protocol";
import { EnterpriseCar } from "./enterprise-car";
import { EnterpriseCustomer } from "./enterprise-customer";

export class EnterpriseCreateCustomerVehicleFactory
  implements CreateCustomerVehicleFactoryProtocol
{
  createCustomer(customerName: string): CustomerProtocol {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
