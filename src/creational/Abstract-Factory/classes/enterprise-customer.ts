import { CustomerProtocol } from "../interfaces/customer-protocol";

export class EnterpriseCustomer implements CustomerProtocol {
  constructor(public name: string) {}
}
