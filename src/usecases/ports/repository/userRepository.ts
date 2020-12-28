import { User } from "../../../core/domain";
import { CRUDRepository } from "../infrastructure";

export default interface UserRepository extends CRUDRepository<User, string> {
	findByEmail: (email: string) => Promise<User>;
}
