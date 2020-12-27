
export default interface CRUDRepository<T, K> {
	findAll: () => Promise<T[]>;
	findByKey: (key: K) => Promise<T>;
	add: (entity: T) => Promise<void>;
	exists: (key: K) => Promise<boolean>;
}
