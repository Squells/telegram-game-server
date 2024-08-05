import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";
import { GameDig } from "gamedig";
import { IConfigService } from "../config/config.interface";
import fs from "fs";

export class StartCommand extends Command {
  constructor(
    bot: Telegraf<IBotContext>,
    private readonly configService: IConfigService
  ) {
    super(bot);
  }

  handle(): void {
    this.bot.start((ctx) => {
      ctx.reply(
        "Добро пожаловать в бота по управлению серверами counter strike 1.6",
        Markup.inlineKeyboard([
          Markup.button.callback("Мой сервер ✨", "servers"),
          Markup.button.callback("Помощь 🖐", "help"),
        ])
      );
    });
    this.bot.action("servers", async (ctx) => {
      const server = await GameDig.query({
        type: this.configService.get<string>("TYPE"),
        host: this.configService.get<string>("HOST"),
        port: this.configService.get<number>("PORT"),
      });
      const playersName = server.players
        .map((player) => "🎮 " + player.name)
        .join("\n");
      const mapPath = `maps/${server.map}.jpg`;
      const defaultMapPath = `maps/none.png`;
      const mapExists = fs.existsSync(mapPath);
      const mapStream = fs.createReadStream(
        mapExists ? mapPath : defaultMapPath
      );
      ctx.replyWithPhoto(
        {
          source: mapStream,
        },
        {
          caption: `Сервер: ${server.name}\n\nℹ️ Карта: ${server.map} | ${server.numplayers}/${server.maxplayers}\n\nИгроки:\n${playersName}`,
        }
      );
    });
    this.bot.action("help", (ctx) => {
      ctx.sendMessage(
        "За помощью вы можете обратиться на форум dev-cs.ru или в личные сообщения (Телеграмм) @Disgustingly7",
        {
          link_preview_options: { is_disabled: true },
        }
      );
    });
  }
}
