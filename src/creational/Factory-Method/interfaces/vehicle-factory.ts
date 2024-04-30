import { Vehicle } from "./vehicle";

export abstract class VehicleFactory {
  //Factory Method (esse método pode ser implementado aqui se necessário)
  abstract getVehicle(vehicleName: string): Vehicle;

  /*
    A classe abstrata/interface da factory pode contar métodos
    que possuam lógica
  */
  pickUp(custumerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickUp(custumerName);
    return car;
  }
}
