import { Vehicle } from "../interfaces/vehicle";
import { VehicleFactory } from "../interfaces/vehicle-factory";
import { Car } from "./car";

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
