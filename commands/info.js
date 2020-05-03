const discord = require('discord.js');

module.exports.run = async(bot, message, arguments) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle("%$ERROR$%")
            .setDescription("#%$SyntaxERROR#%$")
            .setColor("#ff6600")
            .setThumbnail('https://imgur.com/jooeCoZ.png')
            .addFields(
                { name: 'je bent de server gejoint op:', value: message.member.joinedAt },
                { name: 'Totaal members', value: message.guild.memberCount },
            )
            .setAuthor('Rock^#%etNetw^$#rk', 'https://imgur.com/jooeCoZ.png', 'http://rocketnetwork.org/')
            .setTimestamp()
            .setFooter('Rock^#%etNetw^$#rk', 'https://imgur.com/jooeCoZ.png');
            
        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}