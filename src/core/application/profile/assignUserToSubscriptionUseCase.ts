import { AssignUserToSubscriptionUseCasePort } from "../../ports/profile";
import { UseCase } from "../infrastructure";

export default class AssignUserToSubscriptionUseCase extends UseCase implements AssignUserToSubscriptionUseCasePort {
    async execute(): Promise<any> {
        return {};
    }
}
