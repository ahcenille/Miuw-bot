const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag} sunucuya giriş yaptı ve artık aktif!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'beni boş yere yorma') {
    msg.reply('Derdim deniz, efkarım derya.');
  }
if (!msg.content.startsWith(prefix)) {
  return;
}
if (msg.content.toLowerCase() === prefix + 'yerdeniz' ) {
  msg.reply('https://youtu.be/lhtYHEsPLgs')
}

});
client.on('guildBanAdd' , (guild, user) => {
  let sunuculoglari = guild.channels.find('name', 'sunucu-loglari');
  if (!sunuculoglari) return;
  sunuculoglari.send('https://media.giphy.com/media/8njotXALXXNrW/giphy.gif **sanırım birileri biraz yaramaz** '+user.name+'**o zaman bir cezayı hak ettin!** :fist: :writing_hand: :spy:' );
})
client.login('NzY0ODkxOTcyNDg5NTc2NDY5.X4M3KQ.l6zlPIdHzC0tPoNzi4f6LMcF-L0');
