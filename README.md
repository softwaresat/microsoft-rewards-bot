# microsoft-rewards-bot
Are you fed up of searching multiple times everyday to meet your Microsoft rewards quota? This bot can do the computer and even mobile searches (through some tweaks) very easily in under 10 minutes. You can do whatever you want during the time.

<h3>Steps to install and use</h3>
1. Install nodejs (https://nodejs.org/en/)
2. Install puppeteer in the directory you are using 
`npm install puppeteer`
3. Install prompt in the directory you are using 
`npm install prompt`
4. Download the file
5. Run node rewards.js in your terminal.
6. Put in the credential it asks, you only have 20 seconds to do this and the next step (don't worry, this runs entirely on your computer)
7. Put in the speed (1 is faster than 2 but all the speeds are random per search)
8. Watch the bot do all your hard work and enjoy :)

<h3>Steps to do mobile searches</h3>
1. Go to your text editor of your choice
2. Open rewards.j3
3. Change the line `const browser =  await puppeteer.launch(); ` to  `const browser =  await puppeteer.launch({headless: false} );` 
4. Run the program
5. Inspect the chromium tab after it finishes logging you in and run it in chrome phone mode by clicking this icon that looks like a phone
6. Choose your device of choice form the dropdown menu
7. Watch the program finish your mobile searches!

