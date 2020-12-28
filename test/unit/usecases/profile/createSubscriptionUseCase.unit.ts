
import sinon from 'sinon';
import { expect } from 'chai';

import { isValidUUIDV4 } from 'is-valid-uuid-v4';

import { User } from '../../../../src/core/domain';
import { CreateSubscriptionUseCaseInput, CreateSubscriptionUseCase } from '../../../../src/usecases/profile';
import { MockLogger, MockUserRepository, MockSubscriptionRepository } from './mockRepository'

describe('CreateSubscriptionUseCase', () => {
  describe('Constructor', () => {

    it('Happy Path', () => {
      const userRepository = new MockUserRepository();
      const subscriptionRepository = new MockSubscriptionRepository();

      const createSubscriptionUseCase = new CreateSubscriptionUseCase(userRepository, subscriptionRepository, new MockLogger());
      expect(createSubscriptionUseCase).to.be.instanceof(CreateSubscriptionUseCase);
    });
  });

  describe('Execute', () => {

    it('Happy Path', async () => {
      const user: User = {
        id: 'id',
        name: 'name',
        email: 'name@email.com',
        owner: true,
        subscriptionId: ''
      };

      const userRepository = new MockUserRepository();
      sinon.stub(MockUserRepository.prototype, "findByKey").resolves(user);

      const subscriptionRepository = new MockSubscriptionRepository();

      const createSubscriptionUseCase =
        new CreateSubscriptionUseCase(userRepository, subscriptionRepository, new MockLogger());
      const input: CreateSubscriptionUseCaseInput = {
        mainUser: user
      };

      const newSubscription = await createSubscriptionUseCase.execute(input);
      expect(newSubscription).not.to.be.null;
      expect(newSubscription.id).not.to.be.null;
      expect(isValidUUIDV4(newSubscription.id)).to.be.true;
    });
  });


});
