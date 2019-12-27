const Telegraf = require('telegraf')

const bot = new Telegraf('985672071:AAHJXvPK1EUuPl9Nxv1evMDXCCcLKUC8qzY')
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()

