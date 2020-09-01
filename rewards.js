var i;
var num = 0;
 var prompt = require('prompt');
 var email;
 var password;
var lettertyped; 
var mobile; //
  // Start the prompt
  //
  prompt.start();
 
  //
  // Get two properties from the user: username and email
  //
  prompt.get(['email', 'password','lettertyped','mobile'], function (err, result) {
    //
    // Log the results.
    //  
    console.log('Command-line input received:');
    console.log('  email: ' + result.email);
    console.log('  password: ' + result.password);
    console.log(" I will type: " + result.lettertyped);
    console.log("The search is mobile?:" + result.mobile);
    email = result.email;
    password = result.password;
    lettertyped = result.lettertyped;
    mobile = result.mobile;
  });

const puppeteer = require('puppeteer');
setTimeout(
    async function () {
     
if(mobile==='yes' || mobile==="YES" || mobile==="Yes"){
 num = 25;
}
else{
  num = 35;
} 
    console.log('Currently Logging You In!')
    const browser =  await puppeteer.launch();    
    const page =  await browser.newPage();
    await page.goto('https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1593542743&rver=6.7.6631.0&wp=MBI_SSL&wreply=https%3a%2f%2fwww.bing.com%2fsecure%2fPassport.aspx%3frequrl%3dhttps%253a%252f%252fwww.bing.com%252fsearch%253fq%253daaaa%2526go%253dSearch%2526qs%253dds%2526form%253dQBRE%2526wlsso%253d1%2526wlexpsignin%253d1%26sig%3d1EB29EC896D9682B3684903197676976&lc=1033&id=264960&CSRFToken=0fac2379-af43-43a7-9152-fc72ff38f12b&aadredir=1')
        await page.waitForSelector('#i0116')
        await page.type('#i0116', email)
        await page.keyboard.press('Enter');   
         await page.type('#i0118',password, {delay:500})
        //  await page.click('#idChkBx_PWD_KMSI0Pwd',{delay:500})
        await page.click('#idSIButton9',{delay:500})
        await page.waitForSelector('#idSIButton9')
        await page.click('#idSIButton9', {delay:1000});
    
      console.log('Currently Searching!')
      console.log('Will search '+ num +" more times!")
    for(i=1;i<num;i++){
        
        await page.waitForSelector('#sb_form_q')
        await page.type('#sb_form_q', lettertyped, {delay:Math.random*3000});
        await page.keyboard.press('Enter', {delay:2000+Math.random()*1200},{waitUntil: 'load', timeout: 0});   

    }
    
   
   console.log('Done with the work!')
  await browser.close()

}, 25000)

