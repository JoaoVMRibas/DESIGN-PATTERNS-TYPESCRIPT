import { CustomerProtocol } from "../interfaces/customer-protocol";

export class IndividualCustomer implements CustomerProtocol {
  constructor(public name: string) {}
}
