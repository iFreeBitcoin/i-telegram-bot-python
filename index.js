/*

*/

const env = require('dotenv').config().parsed, telegram = new (require('node-telegram-bot-api'))(env.TOKEN, { polling: true });

console.log(env);

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