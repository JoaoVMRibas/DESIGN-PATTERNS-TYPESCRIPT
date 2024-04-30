import { Vehicle } from "../interfaces/vehicle";

export class Motorcycle implements Vehicle {
  constructor(private name: string) {}

  //Os métodos poderiam/deveriam ser diferentes para cada veículo que implementa
  //a interface 'Vehicle'
  pickUp(custumerName: string): void {
    console.log(`${this.name} está buscando ${custumerName}.`);
  }

  stop(): void {
    console.log(`${this.name} parou.`);
  }
}
