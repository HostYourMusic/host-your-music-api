import { UseCase } from '../infrastructure';
import { Logger } from '../ports/infrastructure';

export default class ListUsersInSubscriptionUseCase extends UseCase {
  constructor(private logger: Logger) {
    super();
  }

  async execute(input: any): Promise<any> {
    this.logger.info(input);
    return {};
  }
}
