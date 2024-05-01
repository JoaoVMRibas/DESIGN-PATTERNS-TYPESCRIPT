import { CustomerProtocol } from "./customer-protocol";
import { VehicleProtocol } from "./vehicle-protocol";

export interface CreateCustomerVehicleFactoryProtocol {
  createCustomer(customerName: string): CustomerProtocol;
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}
