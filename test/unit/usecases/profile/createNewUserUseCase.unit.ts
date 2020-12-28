
import assert from 'assert';
import sinon from 'sinon';
import { expect } from 'chai';

import * as idGenerator  from '../../../../src/lib/idGenerator';
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

const mockId = 'AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE';

describe('CreateNewUserUseCase', () =>  {
	const sandbox = sinon.createSandbox();

	before(() => {
		sandbox.stub(idGenerator, 'generateId').returns(mockId);
	});

	after(() => {
		sandbox.restore();
	});

	describe('Constructor', () => {

		it('Happy Path', () => {
			const userRepository = new MockUserRepository();
			const subscriptionRepository = new MockSubscriptionRepository();

			const createNewUserUseCase = new CreateNewUserUseCase(userRepository, subscriptionRepository);
			expect(createNewUserUseCase).to.be.instanceof(CreateNewUserUseCase);
		});
	});

	describe('Execute', () => {

		it('Create new user, no subscription attached', async () => {

			console.log(`idGenerator() = ${idGenerator.generateId()}`);

			const user: User = {
				id: idGenerator.generateId(),
				name: 'User Name',
				email:'user@mail.com',
				owner: true
			};

			const userRepository = new MockUserRepository();
			sinon.stub(MockUserRepository.prototype, "findByEmail").resolves(null);
			sinon.stub(MockUserRepository.prototype, "add").resolves();

			const subscriptionRepository = new MockSubscriptionRepository();

			const createNewUserUseCase =
				new CreateNewUserUseCase(userRepository, subscriptionRepository);
			const input: CreateNewUserUseCaseInput = {
				name: 'User Name',
				email: 'user@mail.com'
			};

			const newUser = await createNewUserUseCase.execute(input);

			console.log(`newUser = ${JSON.stringify(newUser, null, 2)}`);

			expect(newUser).not.to.be.null;
			expect(newUser.id).not.to.be.null;
			expect(newUser).to.deep.equal(user);


		});
	});


});
