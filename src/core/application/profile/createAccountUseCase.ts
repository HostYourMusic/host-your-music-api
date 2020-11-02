import { CreateAccountUseCasePort } from "../../ports/profile";
import { UseCase } from "../infrastructure";

export default class CreateAccountUseCase extends UseCase implements CreateAccountUseCasePort {
  async execute(): Promise<any> {
      return {};
  }
}
