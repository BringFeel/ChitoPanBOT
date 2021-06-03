const Discord = require('discord.js');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = {
    name: 'mcsrv',
    description: 'Muestra los jugadores online en el servidor',
    execute(msg, args) {
        let searchTerm = '';
        if (args.length) {
            searchTerm = args[0];
        }
        function httpGetAsync(url, callback) {
            let xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                callback(xmlhttp.responseText);
            }};

            xmlhttp.open("GET", url, true);
            xmlhttp.send(null);
            return;
        }
        function mcServStatusCallback(responsetext) {
            const response_parse = JSON.parse(responsetext);
            const status = response_parse;
            const embed = new Discord.MessageEmbed();
            embed.setColor('#26FF82');
            if (status["online"]) {
                embed.setTitle(`${searchTerm}`)
                .setURL(`https://mcapi.us/server/status?ip=${searchTerm}`)
                .setThumbnail(`https://api.mcsrvstat.us/icon/${searchTerm}`)
                if (status.hasOwnProperty("players")) {
                    embed.addField('Players:', 'Online: ' + status["players"]["online"] + '\nMax: ' + status["players"]["max"]);
                    if (status.hasOwnProperty("version") && status["version"] !== "") {
                        embed.addField('Versión:', status["version"]);
                    }
                }
            } else {
                embed.setTitle('El servidor no está online o sucedió algún error en el ping');
            }
            embed.setFooter("ChitoPanBOT#4390 • +mcsrvapi", 'https://cdn.discordapp.com/attachments/831975734070476861/850154574596800592/cpbpfp.jpg').setTimestamp();
            msg.channel.send(embed);
            return;
        }
        function grab_data() {
            let search_url = "https://api.mcsrvstat.us/2/" + searchTerm;
            httpGetAsync(search_url, mcServStatusCallback);
            return;
        }
        if (searchTerm !== '') {
            grab_data();
        } else {
            const embed = new Discord.MessageEmbed();
            embed.setColor('#26FF82').setTitle('Ingresa la ip de un servidor para poder usar el comando').setTimestamp();
            msg.channel.send(embed);
        }
    }
}
