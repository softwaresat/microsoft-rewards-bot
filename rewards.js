var i;
 var prompt = require('prompt');
 var email;
 var password;
var speed;
  //
  // Start the prompt
  //
  prompt.start();
 
  //
  // Get two properties from the user: username and email
  //
  prompt.get(['email', 'password','speed'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  email: ' + result.email);
    console.log('  password: ' + result.password);
    console.log(" speed: " + result.speed);
    email = result.email;
    password = result.password;
    speed = result.speed;
  });
  

const puppeteer = require('puppeteer');
setTimeout(
    async function () {
    
    const browser =  await puppeteer.launch();    
    const page =  await browser.newPage();
    await page.goto('https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1593542743&rver=6.7.6631.0&wp=MBI_SSL&wreply=https%3a%2f%2fwww.bing.com%2fsecure%2fPassport.aspx%3frequrl%3dhttps%253a%252f%252fwww.bing.com%252fsearch%253fq%253daaaa%2526go%253dSearch%2526qs%253dds%2526form%253dQBRE%2526wlsso%253d1%2526wlexpsignin%253d1%26sig%3d1EB29EC896D9682B3684903197676976&lc=1033&id=264960&CSRFToken=0fac2379-af43-43a7-9152-fc72ff38f12b&aadredir=1')
        await page.waitForSelector('#i0116')
        await page.type('#i0116', email)
        await page.keyboard.press('Enter');   
         await page.type('#i0118',password, {delay:500})
         await page.click('#idChkBx_PWD_KMSI0Pwd',{delay:500})
        await page.click('#idSIButton9', {delay:1000});
    

    for(i=1;i<32;i++){
        
        await page.waitForSelector('#sb_form_q')
        await page.type('#sb_form_q', 'a', {delay:speed*(Math.random*1000)});
        await page.keyboard.press('Enter', {delay:2000},{waitUntil: 'load', timeout: 0});   

    }
    
   
   console.log('done')
  await browser.close()

}, 20000)

