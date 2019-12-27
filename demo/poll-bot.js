const Telegraf = require('telegraf')
const { Composer } = Telegraf

const bot = new Telegraf('985672071:AAHJXvPK1EUuPl9Nxv1evMDXCCcLKUC8qzY')

bot.on('poll', (ctx) => console.log('Poll update', ctx.poll))

bot.start((ctx) => ctx.telegram.sendPoll('group id', '2b|!2b', ['True', 'False']))

bot.command('poll', Composer.groupChat(
  (ctx) => ctx.replyWithPoll('2b|!2b', ['True', 'False'])
))

bot.launch()
