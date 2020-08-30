# microsoft-rewards-bot
Are you fed up of searching multiple times everyday to meet your Microsoft rewards quota? This bot can do the computer and even mobile searches (through some tweaks) very easily in under 10 minutes. You can do whatever you want during the time.

Steps to install and use
1. Install nodejs (https://nodejs.org/en/)
2. Navigate to the directory which you are using by using `cd directory` where directory is the folder which you are using.
3. Install puppeteer in the directory you are using 
`npm install puppeteer`
4. Install prompt in the directory you are using 
`npm install prompt`
5. Download the file
6. Run `node rewards.js` in your terminal.
7. Put in the credential it asks, you only have 25 seconds to do this and the next steps (don't worry, this runs entirely on your computer)
8. Put in what you want to type (make it one letter or number)
9. Put whether this is a mobile search or not, make sure this is a simple yes or no, no capitalization or mispellings please.
10. Watch the bot do all your hard work and enjoy :)

Steps to do mobile searches
1. Go to your text editor of your choice
2. Open rewards.js
3. Change the line `const browser =  await puppeteer.launch(); ` to  `const browser =  await puppeteer.launch({headless: false} );` 
4. Run the program
5. Inspect the chromium tab after it finishes logging you in and run it in chrome phone mode by clicking this icon that looks like a phone
6. Choose your device of choice form the dropdown menu
7. Watch the program finish your mobile searches!

