export default abstract class UseCase {
    abstract execute(): Promise<any>;
}
