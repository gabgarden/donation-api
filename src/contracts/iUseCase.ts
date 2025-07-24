export interface IUseCase<T> {
  perform(data: T): Promise<T | Error>;
}
