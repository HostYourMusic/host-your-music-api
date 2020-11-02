export default interface UseCasePort {
    execute(): Promise<any>;
}
