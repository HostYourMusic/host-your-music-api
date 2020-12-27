import assert from 'assert';
import { expect } from 'chai';
import { User } from '../../../../src/core/domain';
import { CreateSubscriptionUseCase } from '../../../../src/usecases/profile';



describe('CreateSubscriptionUseCase', () =>  {
	describe('Constructor', () => {

		it('Happy Path', () => {
			const createSubscriptionUseCase = new CreateSubscriptionUseCase();
			expect(createSubscriptionUseCase).to.be.instanceof(CreateSubscriptionUseCase);
		});
	});

	describe('Execute', () => {

		it('Happy Path', async () => {
			const createSubscriptionUseCase = new CreateSubscriptionUseCase();

			const ucResult = await createSubscriptionUseCase.execute();
			expect(ucResult).not.to.be.null;
		});
	});


});
