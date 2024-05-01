import { EmailValidatorProtocol } from "../interfaces/email-validator-protocol";
import isEmail from "validator/lib/isEmail";

export class EmailValidatorAdapter implements EmailValidatorProtocol {
  isEmailValid(value: string): boolean {
    return isEmail(value);
  }
}
