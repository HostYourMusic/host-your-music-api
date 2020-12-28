
export default interface CRUDRepository<T, K> {
	findAll: () => Promise<T[]>;
	findByKey: (key: K) => Promise<T | null>;
	add: (entity: T) => Promise<void>;
	exists: (key: K) => Promise<boolean>;
}
