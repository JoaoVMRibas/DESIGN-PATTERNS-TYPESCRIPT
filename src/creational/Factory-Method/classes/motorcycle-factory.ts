import { Vehicle } from "../interfaces/vehicle";
import { VehicleFactory } from "../interfaces/vehicle-factory";
import { Motorcycle } from "./motorcycle";

export class MotorcycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Motorcycle(vehicleName);
  }
}
