import { generateId } from '../../lib/idGenerator';

import { User, Subscription  } from "../../core/domain";
import { UseCase } from "../infrastructure";
import UserAlreadyExistsException from '../exceptions/userAlreadyExistsException';

import { UserRepository, SubscriptionRepository } from "../ports/repository"

interface CreateNewUserUseCaseInput {
	name: string,
	email: string
  }

class CreateNewUserUseCase extends UseCase {
	constructor(
		private userRepository: UserRepository,
		private subscriptionRepository: SubscriptionRepository
	) {
		super();
	};

    async execute(input: CreateNewUserUseCaseInput): Promise<User> {

		if(await this.userRepository.findByEmail(input.email)) {
			throw new UserAlreadyExistsException(
				new Error("User already registered"),
				"User already registered"
			);
		}

		const user: User = {
			id: generateId(),
			name: input.name,
			email: input.email,
			owner: true
		};

		// const subscription: Subscription = {
		// 	id: uuidv4(),
		// 	mai
		// };

		await this.userRepository.add(user);

		return user;
    }
}

export {
	CreateNewUserUseCaseInput,
	CreateNewUserUseCase
};
