const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const keyboard = Markup.inlineKeyboard([
  Markup.urlButton('❤️', 'http://telegraf.js.org'),
  Markup.callbackButton('Delete', 'delete')
])

const bot = new Telegraf('985672071:AAHJXvPK1EUuPl9Nxv1evMDXCCcLKUC8qzY')
bot.start((ctx) => ctx.reply('Hello'))
bot.help((ctx) => ctx.reply('Help message'))
bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.chat.id, ctx.message, Extra.markup(keyboard)))
bot.action('delete', ({ deleteMessage }) => deleteMessage())
bot.launch()
