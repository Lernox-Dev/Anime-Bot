const Discord = require('discord.js');
const AlexAPI = require('alexflipnote.js');
const settings = require('../settings.json');
const AlexClient = new AlexAPI(settings.apitoken);
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
    let avatar = message.mentions.users.size ? message.mentions.users.first().displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 });
  let link = await AlexClient.image.amiajoke({image: avatar})
  const embed = new Discord.MessageEmbed()
  .setColor("#ff9900")
  .attachFiles({ attachment: link, name: "image.png" })
  .setImage("attachment://image.png")
    .setFooter(`© OtakuGirl by ${customisation.ownername}`);
    message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'amiajoke',
    description: 'amiajoke you ?',
    usage: 'amiajoke (w or w/o @mention)'
  };
   
