
import assert from 'assert';
import sinon from 'sinon';
import * as chai from 'chai'

import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)

import * as idGenerator  from '../../../../src/lib/idGenerator';
import { isValidUUIDV4 } from 'is-valid-uuid-v4';

import UserAlreadyExistsException from '../../../../src/usecases/exceptions/userAlreadyExistsException';

import { Subscription, User } from '../../../../src/core/domain';
import { UserRepository, SubscriptionRepository } from '../../../../src/usecases/ports/repository';
import { CreateNewUserUseCaseInput, CreateNewUserUseCase } from '../../../../src/usecases/profile';


export class MockUserRepository implements UserRepository {
	findAll (): Promise<User[]> { throw new Error("Method not implemented."); }
	findByKey (key: string): Promise<User | undefined>  { throw new Error("Method not implemented."); }
	add (entity: User): Promise<void>  { throw new Error("Method not implemented."); }
	exists (key: string): Promise<boolean>  { throw new Error("Method not implemented."); }
	findByEmail(email: string): Promise<User | undefined>  { throw new Error("Method not implemented."); }
}

export class MockSubscriptionRepository implements SubscriptionRepository {
	findAll (): Promise<Subscription[]> { throw new Error("Method not implemented."); }
	findByKey (key: string): Promise<Subscription | undefined>  { throw new Error("Method not implemented."); }
	add (entity: Subscription): Promise<void>  { throw new Error("Method not implemented."); }
	exists (key: string): Promise<boolean>  { throw new Error("Method not implemented."); }
}

const mockId = 'AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE';

describe('CreateNewUserUseCase', () =>  {
	const sandbox = sinon.createSandbox();

	const userRepository = new MockUserRepository();
	const subscriptionRepository = new MockSubscriptionRepository();

	beforeEach(() => {
		sandbox.stub(idGenerator, 'generateId').returns(mockId);
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('Constructor', () => {

		it('Happy Path', () => {
			const userRepository = new MockUserRepository();
			const subscriptionRepository = new MockSubscriptionRepository();

			const createNewUserUseCase = new CreateNewUserUseCase(userRepository, subscriptionRepository);
			chai.expect(createNewUserUseCase).to.be.instanceof(CreateNewUserUseCase);
		});
	});

	describe('Execute', () => {

		it('Create new user, no subscription attached', async () => {

			const expectedUser: User = {
				id: mockId,
				name: 'User Name',
				email:'user@mail.com',
				owner: true,
				subscription: {
					id: mockId,
					users: []
				}
			};

			sandbox.stub(MockUserRepository.prototype, "findByEmail").resolves(undefined);
			sandbox.stub(MockUserRepository.prototype, "add").resolves();
			sandbox.stub(MockSubscriptionRepository.prototype, "add").resolves();

			const createNewUserUseCase =
				new CreateNewUserUseCase(userRepository, subscriptionRepository);
			const input: CreateNewUserUseCaseInput = {
				name: 'User Name',
				email: 'user@mail.com'
			};

			const resultUser = await createNewUserUseCase.execute(input);

			chai.expect(resultUser).not.to.be.null;
			chai.expect(resultUser).to.deep.equal(expectedUser);
		});

		it('Create new user, existing subscription attached', async () => {

			const expectedUser: User = {
				id: mockId,
				name: 'User Name',
				email:'user@mail.com',
				owner: false,
				subscription: {
					id: mockId,
					users: []
				}
			};

			const existingSubscription: Subscription = {
				id: mockId,
				users: []
			};

			sandbox.stub(MockUserRepository.prototype, "findByEmail").resolves(undefined);
			sandbox.stub(MockUserRepository.prototype, "add").resolves();
			sandbox.stub(MockSubscriptionRepository.prototype, "add").resolves();
			sandbox.stub(MockSubscriptionRepository.prototype, "findByKey").resolves(existingSubscription);

			const createNewUserUseCase =
				new CreateNewUserUseCase(userRepository, subscriptionRepository);
			const input: CreateNewUserUseCaseInput = {
				name: 'User Name',
				email: 'user@mail.com',
				subscription: existingSubscription
			};

			const resultUser = await createNewUserUseCase.execute(input);

			chai.expect(resultUser).not.to.be.null;
			chai.expect(resultUser).to.deep.equal(expectedUser);
		});

		it('Create new user, already existing', async () => {

			const existingUser: User = {
				id: mockId,
				name: 'User Name',
				email:'user@mail.com',
				owner: false,
				subscription: {
					id: mockId,
					users: []
				}
			};

			const existingSubscription: Subscription = {
				id: mockId,
				users: []
			};

			sandbox.stub(MockUserRepository.prototype, "findByEmail").resolves(existingUser);

			const createNewUserUseCase =
				new CreateNewUserUseCase(userRepository, subscriptionRepository);

				const input: CreateNewUserUseCaseInput = {
				name: 'User Name',
				email: 'user@mail.com'
			};

			await chai.expect(createNewUserUseCase.execute(input))
				.to.be.rejectedWith(UserAlreadyExistsException);

		});
	});
});
