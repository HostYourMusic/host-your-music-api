import assert from 'assert';
import sinon from 'sinon';

import { expect } from 'chai';

import { Subscription, User } from '../../../../src/core/domain';

import { UserRepository, SubscriptionRepository } from '../../../../src/usecases/ports/repository';
import { CreateSubscriptionUseCase } from '../../../../src/usecases/profile';


export class MockUserRepository implements UserRepository {
	findAll (): Promise<User[]> { throw new Error("Method not implemented."); }
	findByKey (key: string): Promise<User>  { throw new Error("Method not implemented."); }
	add (entity: User): Promise<void>  { throw new Error("Method not implemented."); }
	exists (key: string): Promise<boolean>  { throw new Error("Method not implemented."); }
}
export class MockSubscriptionRepository implements SubscriptionRepository {
	findAll (): Promise<Subscription[]> { throw new Error("Method not implemented."); }
	findByKey (key: string): Promise<Subscription>  { throw new Error("Method not implemented."); }
	add (entity: Subscription): Promise<void>  { throw new Error("Method not implemented."); }
	exists (key: string): Promise<boolean>  { throw new Error("Method not implemented."); }
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
			const user: User = {
				id: 'id',
				name: 'name'
			};

			const userRepository = new MockUserRepository();
			sinon.stub(MockUserRepository.prototype, "findByKey").resolves(user);

			const subscriptionRepository = new MockSubscriptionRepository();

			const createSubscriptionUseCase =
				new CreateSubscriptionUseCase(userRepository, subscriptionRepository);

			const newSubscription = await createSubscriptionUseCase.execute();
			expect(newSubscription).not.to.be.null;
			expect(newSubscription.id).not.to.be.null;
		});
	});


});
