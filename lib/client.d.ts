import { Config } from './config.type';
import { UnknownParams } from './client.type';
export default class Client {
    config: Config;
    constructor(config?: Config);
    post<T, U>(pathname: string, data: T): Promise<U>;
    isError(res: UnknownParams): boolean;
}
