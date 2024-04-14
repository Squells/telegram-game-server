export interface IConfigService {
  get<T>(key: string | number): T;
}
