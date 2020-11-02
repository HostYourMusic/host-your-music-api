import { ListUsersInSubscriptionUseCasePort } from "../../ports/profile";
import { UseCase } from "../infrastructure";

export default class ListUsersInSubscriptionUseCase  extends UseCase implements ListUsersInSubscriptionUseCasePort{
    async execute(): Promise<any> {
        return {};
    }
}
