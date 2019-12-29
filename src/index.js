const Telegraf = require('telegraf');
const got = require('got');
const Markup = require('telegraf/markup')

const baseUrl = 'https://www.okex.com';

const bot = new Telegraf('985672071:AAHJXvPK1EUuPl9Nxv1evMDXCCcLKUC8qzY')

bot.use((ctx, next) => {
  return next();
});

async function getCoinInfo(text = '') {
  text = text.trim().replace(/\s*/, '');
  const coin = text.slice(2).trim();

  let responseText = `Please input "/p coin-name", for example "/p btc". \n<a href="https://www.okex.com">You can Trade Crypto Currency on OKEx</a>`;

  if (coin) {
    const api = `${baseUrl}/v2/spot/markets/ticker?symbol=${coin.toUpperCase()}_USDT`;
    const response = await got.get(api, {
      responseType: 'json'
    });

    const data = response.body.data;
    responseText = `<b>last: ${data.close}</b>\n<a href="${baseUrl}/spot/trade/${coin}_usdt">Trade BTC on OKEx</a>`;
  }
  return responseText;
}

bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));

// 文本监听
bot.hears(/^\s*p\s+.*/, async (ctx) => {
  const { message } = ctx;
  let { text } = message;

  const information = await getCoinInfo(text);

  ctx.reply(information, {
    disable_web_page_preview: true,
    parse_mode: 'html',
    reply_markup: Markup.inlineKeyboard([
      Markup.urlButton('Go to OKEx', baseUrl)
    ])
  });
});

// OKEx官网
bot.command(['ok', 'okex'], Telegraf.reply(baseUrl, {
  disable_web_page_preview: true
}));

// 价格指令
bot.command('p', async (ctx) => {
  const { message } = ctx;
  console.log(message)
  let { text } = message;

  const information = await getCoinInfo(text);

  ctx.reply(information, {
    disable_web_page_preview: true,
    parse_mode: 'html',
    reply_markup: Markup.inlineKeyboard([
      Markup.urlButton('Go to OKEx', baseUrl)
    ])
  });
});

// 彩蛋
bot.command('fuck', (ctx) => {
  ctx.reply('great!');
});

bot.launch();
