import { Subscription } from ".";

export default interface User {
  id: string;
  name: string;
  email: string;
	owner: boolean;
	subscription?: Subscription
}
