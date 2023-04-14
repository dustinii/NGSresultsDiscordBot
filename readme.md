# Discord HeroesProfile Bot

This bot fetches data from a HeroesProfile team page and posts the team's name, record, and match history to a specified Discord channel every weekday at 12pm UTC. TBH, I have no idea if this will work lol.

## Dependencies

- discord.js: `npm install discord.js`
- cheerio: `npm install cheerio`
- node-fetch: `npm install node-fetch`
- cron: `npm install cron`

## Setup

1. Create a new Discord bot and copy its token. You can follow the instructions here: https://discordpy.readthedocs.io/en/latest/discord.html
2. Invite the bot to your Discord server.
3. Replace `INSERT_DISCORD_BOT_TOKEN_HERE` in the code with your bot's token.
4. Replace `INSERT_CHANNEL_ID_HERE` in the code with the ID of the channel where you want the bot to post the HeroesProfile data. To get the channel ID, enable Developer Mode in Discord settings, then right-click the channel and select "Copy ID."
5. Set the `heroesProfileURL` variable to the URL of your team's HeroesProfile page.

## Usage

1. Run the bot using `node index.js`.
2. The bot will automatically post the HeroesProfile data to the specified Discord channel every weekday at 12pm UTC.

## Notes

- The bot must have permission to send messages in the specified channel.
- The bot uses Cheerio to parse the HTML from the HeroesProfile page, so changes to the page structure might break the bot.
- The bot is scheduled to run every weekday (Monday through Friday) at 12pm UTC. You can adjust the cron expression in the `new cron.CronJob()` call to change the posting schedule.

## Customization

You can customize the bot to fetch data from a different website or change the formatting of the posted data by modifying the `postHeroesProfileData` function.

1. To fetch data from a different website, update the `heroesProfileURL` variable with the new URL.
2. Modify the Cheerio selectors in the `postHeroesProfileData` function to extract the relevant data from the new website's HTML.
3. Update the `formattedMatchHistory` variable to change the formatting of the posted data. You can use Discord's markdown formatting or create an embed using the discord.js library.

## Troubleshooting

If the bot doesn't post the data or encounters an error:

1. Check the bot's permissions on your Discord server to ensure it has permission to send messages in the specified channel.
2. Verify that the `heroesProfileURL` variable is set to a valid URL.
3. Inspect the website's HTML structure and update the Cheerio selectors in the `postHeroesProfileData` function if necessary.
4. Make sure all dependencies are installed and up-to-date.
5. Check the console for error messages, which may provide additional information about the issue.

## Support

If you need assistance or have any questions about this bot, you can contact the bot's creator or search for solutions in the discord.js, Cheerio, node-fetch, and cron communities.

## License

This bot is released under the MIT License. Feel free to use, modify, and distribute the code as you see fit, but please include the original author's attribution in your version.

## Credits
Big thanks to Dustin II for being super handsome, cool, and being a role model for the future kids of America.