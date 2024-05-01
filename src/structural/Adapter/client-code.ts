import { EmailValidatorAdapter } from "./classes/email-validator-adapter";
import { EmailValidatorProtocol } from "./interfaces/email-validator-protocol";

function validateEmail(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmailValid(email)) {
    console.log("Email é válido.");
  } else {
    console.log("Email é inválido.");
  }
}

validateEmail(new EmailValidatorAdapter(), "pedro@gmail.com");
