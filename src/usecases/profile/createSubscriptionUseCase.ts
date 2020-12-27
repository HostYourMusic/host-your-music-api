import { v4 as uuidv4 } from 'uuid';

import { Subscription  } from "../../core/domain";
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

    async execute(): Promise<Subscription> {
		const subscription: Subscription = {
			id: uuidv4()
		};

		return subscription;
    }
}
