import { generateId } from '../../lib/idGenerator';

import { User, Subscription } from "../../core/domain";
import { UseCase } from "../infrastructure";
import UserAlreadyExistsException from '../exceptions/userAlreadyExistsException';

import { UserRepository, SubscriptionRepository } from "../ports/repository"

interface CreateNewUserUseCaseInput {
	name: string,
	email: string,
	subscription?: Subscription
}

class CreateNewUserUseCase extends UseCase {
	constructor(
		private userRepository: UserRepository,
		private subscriptionRepository: SubscriptionRepository
	) {
		super();
	};

	async execute(input: CreateNewUserUseCaseInput): Promise<User> {

		if (await this.userRepository.findByEmail(input.email)) {
			throw new UserAlreadyExistsException(
				new Error("User already registered"),
				"User already registered"
			);
		}

		const user: User = {
			id: generateId(),
			name: input.name,
			email: input.email,
			owner: false
		};

		await this.userRepository.add(user)
			.then(() => {

				if (!input.subscription) {
					user.owner =  true;

					const subscription: Subscription = {
						id: generateId(),
						users: [user]
					};

					this.subscriptionRepository.add(subscription);
					return subscription;

				} else {
					user.owner =  false;
					return this.subscriptionRepository.findByKey(input.subscription.id);
				}

			}).then((subscription) => {

				/**To avoid circular reference */
				if(subscription) subscription.users = [];
				user.subscription = subscription;
			});
		return user;
	}
}

export { CreateNewUserUseCaseInput, CreateNewUserUseCase };
