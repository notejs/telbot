const Telegraf = require('telegraf')

const bot = new Telegraf('985672071:AAHJXvPK1EUuPl9Nxv1evMDXCCcLKUC8qzY')


bot.use((ctx) => {
    // console.log(ctx.message)
})

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.command('okex', Telegraf.reply('https://www.okex.com'))


bot.command('p', async (ctx) => {
    console.log(ctx.message, ctx.chat);
    const { reply } = ctx;
    reply();
})

bot.launch()
