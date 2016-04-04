var restify = require('restify');
var builder = require('botbuilder');

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: 'ericTestBot', appSecret: '42b2ae35b43b4e38ab48aecc0f59287e' });
bot.add('/', function (session) {
    session.send("I'm worthless, but now we don't have to buy pizza :)");
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});