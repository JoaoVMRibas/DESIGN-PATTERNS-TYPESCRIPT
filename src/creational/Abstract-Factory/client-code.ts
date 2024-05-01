import { EnterpriseCreateCustomerVehicleFactory } from "./classes/enterprise-customer-vehicle-factory";
import { IndividualCreateCustomerVehicleFactory } from "./classes/individual-customer-vehicle-factory";

const enterpriseFactory = new EnterpriseCreateCustomerVehicleFactory();
const individualFactory = new IndividualCreateCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle("Celta", "Roberto");
const car2 = individualFactory.createVehicle("Fusca", "Helena");

car1.pickUp();
car2.pickUp();
