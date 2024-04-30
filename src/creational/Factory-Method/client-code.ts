import { CarFactory } from "./classes/car-factory";

const carFactory = new CarFactory();
const fusca = carFactory.getVehicle("Fusca");
fusca.pickUp("Joana");
fusca.stop();
