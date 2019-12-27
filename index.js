const Telegraf = require('telegraf');
const got = require('got');

const bot = new Telegraf('985672071:AAHJXvPK1EUuPl9Nxv1evMDXCCcLKUC8qzY')


bot.use((ctx, next) => {
    return next();
});

bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.command('okex', Telegraf.reply('https://www.okex.com'));

const baseUrl = 'https://www.okex.com'

async function price(coin = 'btc') {
    
}

bot.command('p', async (ctx) => {
    const { message } = ctx;
    let { text } = message;

    text = text.trim().replace(/\s*/, '');

    const coin = text.slice(2).trim();

    const api = `${baseUrl}/v2/spot/markets/ticker?symbol=${coin.toUpperCase()}_USDT`;
    console.log(api);
   
    const response = await got.get(api, {
        responseType: 'json'
    });
    
    console.log(response.body);
    const data = response.body.data;
    
    ctx.replyWithHTML(`<b>last: ${data.close}</b>\n<a href="${baseUrl}/spot/trade/${coin}_usdt">Trade on OKEx</a>`);
});

bot.launch();
