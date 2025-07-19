export interface IRepository<T> {
    get(id: string): Promise<T | Error>;

    getAll(): Promise<T[] | Error>;

    create(data: T): Promise<T | Error>;

    delete(id: string): Promise<T | Error>;
}