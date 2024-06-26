import { Vehicle } from "../interfaces/vehicle";

export class Car implements Vehicle {
  constructor(private name: string) {}

  pickUp(custumerName: string): void {
    console.log(`${this.name} está buscando ${custumerName}.`);
  }

  stop(): void {
    console.log(`${this.name} parou.`);
  }
}
