const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
prefix = 'Put here'; //prefix

client.commands = new Discord.Collection();


// command used to scan commands folder
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


// put commands here to run
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'play'){
        client.commands.get('play').execute(message, args, Discord);
    }
});




client.login('Put here'); //token
