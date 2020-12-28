import { v4 as uuidv4 } from 'uuid';

import { User, Subscription  } from "../../core/domain";
import { UseCase } from "../infrastructure";

import {
	UserRepository,
	SubscriptionRepository
} from "../ports/repository"

interface CreateSubscriptionUseCaseInput {
	mainUser: User;
}

class CreateSubscriptionUseCase extends UseCase {
	constructor(private userRepository: UserRepository,
		private subscriptionRepository: SubscriptionRepository
	) {
		super();
	};

    async execute(input: CreateSubscriptionUseCaseInput): Promise<Subscription> {
		const subscription: Subscription = {
			id: uuidv4(),
			users: []
		};

		return subscription;
    }
}

export {
	CreateSubscriptionUseCaseInput,
	CreateSubscriptionUseCase
}
