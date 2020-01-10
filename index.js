/*

*/

const env = require('dotenv').parsed, telegram = new (require('node-telegram-bot-api'))(env.TOKEN, { polling: true });

/*

*/

telegram.onText(/\/start/, ( message ) => {
	telegram.sendMessage(message.chat.id, message.text.trim());
});

/*

*/

telegram.on('polling_error', ( e ) => {
	console.log(e);
});