import { Subscription, User } from '../../core/domain';
import { UseCase } from '../infrastructure';
import { Logger } from '../ports/infrastructure';

interface AssignUserToSubscriptionUseCaseInput {
  user: User;
  subscription: Subscription;
}
export default class AssignUserToSubscriptionUseCase extends UseCase {
  constructor(private logger: Logger) {
    super();
  }

  async execute(input: AssignUserToSubscriptionUseCaseInput): Promise<any> {
    this.logger.info(input);
    return {};
  }
}
