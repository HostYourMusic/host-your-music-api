import assert from 'assert';
import { expect } from 'chai';

import { User } from '../../../../src/core/domain';

import { UserRepository, SubscriptionRepository } from '../../../../src/usecases/ports/repository';
import { CreateSubscriptionUseCase } from '../../../../src/usecases/profile';


export class MockUserRepository implements UserRepository {
}

export class MockSubscriptionRepository implements SubscriptionRepository {
}


describe('CreateSubscriptionUseCase', () =>  {
	describe('Constructor', () => {

		it('Happy Path', () => {
			const userRepository = new MockUserRepository();
			const subscriptionRepository = new MockSubscriptionRepository();

			const createSubscriptionUseCase = new CreateSubscriptionUseCase(userRepository, subscriptionRepository);
			expect(createSubscriptionUseCase).to.be.instanceof(CreateSubscriptionUseCase);
		});
	});

	describe('Execute', () => {

		it('Happy Path', async () => {
			const createSubscriptionUseCase = new CreateSubscriptionUseCase(null, null);

			const ucResult = await createSubscriptionUseCase.execute();
			expect(ucResult).not.to.be.null;
		});
	});


});
