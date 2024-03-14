const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://web.whatsapp.com/');

    // انتظر حتى يتم تحميل صفحة واجهة واتساب
    await page.waitForSelector('._1awRl');

    // استمع للرسائل الواردة واستجابة عند استلام ".المطور"
    page.on('message', async (msg) => {
        if (msg === '.المطور') {
            // إرسال رسالة تحتوي على جهة الاتصال المحددة
            await page.evaluate((contactNumber) => {
                const inputField = document.querySelector('.pluggable-input-body');
                inputField.textContent = contactNumber;
                const sendButton = document.querySelector('._4sWnG');
                sendButton.click();
            }, '21653794930'); // استبدل هنا بالرقم الذي تريد إرساله
        }
    });
})();
