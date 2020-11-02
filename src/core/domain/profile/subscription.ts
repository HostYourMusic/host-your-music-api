import User from "./user";

export default interface Subscription {
  id: string;
  users: User[];
}
