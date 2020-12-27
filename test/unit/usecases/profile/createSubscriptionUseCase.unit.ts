import assert from 'assert';
import { expect } from 'chai';
import { User } from '../../../../src/core/domain';
import { CreateSubscriptionUseCase } from '../../../../src/usecases/profile';



describe('CreateSubscriptionUseCase', function () {
  it('Constructor', function () {
    const createSubscriptionUseCase = new CreateSubscriptionUseCase();
    expect(createSubscriptionUseCase).to.be.instanceof(CreateSubscriptionUseCase);
  });
});
