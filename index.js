const Telegraf = require('telegraf')

const bot = new Telegraf('985672071:AAHJXvPK1EUuPl9Nxv1evMDXCCcLKUC8qzY')

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.command('okex', Telegraf.reply('https://www.okex.com'))

bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))
bot.command('a', Telegraf.reply('λ a'))
bot.command('b', Telegraf.reply('λ b'))
bot.command('c', Telegraf.reply('λ c'))
bot.command('d', Telegraf.reply('λ d'))
bot.command('e', Telegraf.reply('λ e'))
bot.launch()
