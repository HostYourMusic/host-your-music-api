
import assert from 'assert';
import sinon from 'sinon';
import { expect } from 'chai';

import { isValidUUIDV4 } from 'is-valid-uuid-v4';

import { Subscription, User } from '../../../../src/core/domain';
import { UserRepository, SubscriptionRepository } from '../../../../src/usecases/ports/repository';
import { CreateNewUserUseCaseInput, CreateNewUserUseCase } from '../../../../src/usecases/profile';


export class MockUserRepository implements UserRepository {
	findAll (): Promise<User[]> { throw new Error("Method not implemented."); }
	findByKey (key: string): Promise<User | null>  { throw new Error("Method not implemented."); }
	add (entity: User): Promise<void>  { throw new Error("Method not implemented."); }
	exists (key: string): Promise<boolean>  { throw new Error("Method not implemented."); }
	findByEmail(email: string): Promise<User | null>  { throw new Error("Method not implemented."); }
}

export class MockSubscriptionRepository implements SubscriptionRepository {
	findAll (): Promise<Subscription[]> { throw new Error("Method not implemented."); }
	findByKey (key: string): Promise<Subscription | null>  { throw new Error("Method not implemented."); }
	add (entity: Subscription): Promise<void>  { throw new Error("Method not implemented."); }
	exists (key: string): Promise<boolean>  { throw new Error("Method not implemented."); }
}


describe('CreateNewUserUseCase', () =>  {
	describe('Constructor', () => {

		it('Happy Path', () => {
			const userRepository = new MockUserRepository();
			const subscriptionRepository = new MockSubscriptionRepository();

			const createNewUserUseCase = new CreateNewUserUseCase(userRepository, subscriptionRepository);
			expect(createNewUserUseCase).to.be.instanceof(CreateNewUserUseCase);
		});
	});

	describe('Execute', () => {

		it('Happy Path', async () => {
			const user: User = {
				id: 'id',
				name: 'name'
			};

			const userRepository = new MockUserRepository();
			sinon.stub(MockUserRepository.prototype, "findByEmail").resolves(null);

			const subscriptionRepository = new MockSubscriptionRepository();

			const createNewUserUseCase =
				new CreateNewUserUseCase(userRepository, subscriptionRepository);
			const input: CreateNewUserUseCaseInput = {
				name: 'User Name',
				email: 'user@mail.com'
			};

			const newUser = await createNewUserUseCase.execute(input);
			expect(newUser).not.to.be.null;
			expect(newUser.id).not.to.be.null;
			expect(isValidUUIDV4(newUser.id)).to.be.true;
		});
	});


});
