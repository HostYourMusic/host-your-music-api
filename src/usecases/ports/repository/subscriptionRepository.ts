import { CRUDRepository } from "../infrastructure";
import { Subscription } from "../../../core/domain";

export default interface SubscriptionRepository extends CRUDRepository<Subscription, string> {
}

