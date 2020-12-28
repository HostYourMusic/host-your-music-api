import { v4 as uuidv4 } from 'uuid';

import { User  } from "../../core/domain";
import { UseCase } from "../infrastructure";

import {
	UserRepository,
	SubscriptionRepository
} from "../ports/repository"

interface CreateNewUserUseCaseInput {
	name: string,
	email: string
  }

class CreateNewUserUseCase extends UseCase {
	constructor(private userRepository: UserRepository,
		private subscriptionRepository: SubscriptionRepository
	) {
		super();
	};

    async execute(input: CreateNewUserUseCaseInput): Promise<User> {

		if(await this.userRepository.findByEmail(input.email)) {
			throw new UserAlreadyExistException();
		}


		const user: User = {
			id: uuidv4(),
			name: input.name
		};



		return user;
    }
}

export {
	CreateNewUserUseCaseInput,
	CreateNewUserUseCase
};
