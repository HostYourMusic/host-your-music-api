import { CreateSubscriptionUseCasePort } from "../../ports/profile";
import { UseCase } from "../infrastructure";

export default class CreateSubscriptionUseCase extends UseCase implements CreateSubscriptionUseCasePort {
    async execute(): Promise<any> {
        return {};
    }
}
