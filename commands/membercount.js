  
module.exports = {
    name: 'membercount',
    description: 'membercount',
    execute(msg, args) {
        const guild = client.guilds.get("703772175949234226");
   setInterval(function () {
      var memberCount = guild.members.filter(member => !member.user.bot).size;  
      var memberCountChannel = client.channels.get("626462657817477131");
      memberCountChannel.setName(`${guild.name} has ${memberCount} members!`);
   }, 1000);
    }
