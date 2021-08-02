const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
prefix = '~'; //prefix

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'play'){
        client.commands.get('play').execute(message, args, Discord);
    }
});




client.login('NzQ2OTU4NzE0ODAzNTg1MTA2.X0H5gw.bhE4-dxoTr6qyODB8eNh2gEBIC8'); //token