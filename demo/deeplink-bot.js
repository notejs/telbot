// https://core.telegram.org/bots#deep-linking
const Telegraf = require('telegraf')

const bot = new Telegraf('985672071:AAHJXvPK1EUuPl9Nxv1evMDXCCcLKUC8qzY')
bot.start((ctx) => ctx.reply(`Deep link payload: ${ctx.startPayload}`))
bot.launch()
