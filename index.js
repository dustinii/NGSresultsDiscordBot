const Discord = require('discord.js');
const cheerio = require('cheerio');
const fetch = require('node-fetch');

// Set the URL of the HeroesProfile page for your team
const heroesProfileURL = 'https://heroesprofile.com/NGS/Team/Single/?team=Bananumnums';

// Create a new Discord client
const client = new Discord.Client();

// Define a function to fetch the HeroesProfile data and post it to Discord
const postHeroesProfileData = async () => {
    // Fetch the HTML of the HeroesProfile page
    const response = await fetch(heroesProfileURL);
    const html = await response.text();

    // Load the HTML into Cheerio for easy parsing
    const $ = cheerio.load(html);

    // Find the <div> element containing the team's name and record
    const teamInfoDiv = $('div[class="team-info"]');

    // Extract the team name and record from the <div> element
    const teamName = $(teamInfoDiv).find('h2').text();
    const teamRecord = $(teamInfoDiv).find('p').text();

    // Find the <table> element containing the team's match history
    const matchHistoryTable = $('table[class="table table-striped"]');

    // Extract the HTML of the match history table and format it for Discord
    const matchHistoryHTML = $(matchHistoryTable).html();
    const formattedMatchHistory = '```html\n' + matchHistoryHTML + '\n```';

    // Post the team's name, record, and match history to Discord
    const channel = client.channels.cache.get('INSERT_CHANNEL_ID_HERE');
    channel.send(`**${teamName}**\n${teamRecord}\n\n${formattedMatchHistory}`);
};

// Log in to Discord and schedule the data posting function to run every weekday at 12pm UTC
client.login('INSERT_DISCORD_BOT_TOKEN_HERE');
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);

    // Set up a cron job to run the data posting function every weekday at 12pm UTC
    const cron = require('cron');
    const job = new cron.CronJob('00 12 * * 1-5', postHeroesProfileData);
    job.start();
});