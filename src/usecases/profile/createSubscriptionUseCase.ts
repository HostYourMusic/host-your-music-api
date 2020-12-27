import { UseCase } from "../infrastructure";

import {
	UserRepository,
	SubscriptionRepository
} from "../ports/repository"

export default class CreateSubscriptionUseCase extends UseCase {
	constructor(private userRepository: UserRepository,
		private subscriptionRepository: SubscriptionRepository
	) {
		super();
	};

    async execute(): Promise<any> {
        return {};
    }
}
