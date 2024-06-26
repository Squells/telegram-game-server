import { config, DotenvParseOutput } from "dotenv";
import { IConfigService } from "./config.interface";

export class ConfigService implements IConfigService {
  private config: DotenvParseOutput;
  constructor() {
    const { error, parsed } = config();
    if (error) {
      throw new Error("Не найден файл .env");
    }
    if (!parsed) {
      throw new Error("Пустой .env файл");
    }
    this.config = parsed;
  }

  get(key: string): any {
    const res = this.config[key];
    if (!res) {
      throw new Error(`Не найден ключ`);
    }
    return res;
  }
}
