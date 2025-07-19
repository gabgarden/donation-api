export interface IUseCase<T> {
    perform(input: T): Promise<T | Error>;
}