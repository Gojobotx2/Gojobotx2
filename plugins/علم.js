import fetch from 'node-fetch';

let timeout = 60000;
let poin = 500;

let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {};
    let id = m.chat;
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0]);
        throw false;
    }

    try {
        let src = await fetch('https://raw.githubusercontent.com/Botxgojo/Gojo/master/علمم.json');
        if (!src.ok) throw Error("Failed to fetch data");
        let json = await src.json();
        json = json[Math.floor(Math.random() * json.length)];

        let caption = `*${command.toUpperCase()}*
        ❐↞┇الـوقـت⏳↞ *${(timeout / 1000).toFixed(2)} ┇
        *استخدم .انسحب للأنسحاب*
        ❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇
        ᥡᥙᥒᥲ☕︎`.trim();

        conn.tebakbendera[id] = [
            await conn.sendFile(m.chat, json.question, '', caption, m),
            json, poin,
            setTimeout(() => {
                if (conn.tebakbendera[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ ${json.response}*┇`, conn.tebakbendera[id][0]);
                delete conn.tebakbendera[id];
            }, timeout)
        ];
    } catch (e) {
        console.error(e);
        conn.reply(m.chat, 'حدث خطأ أثناء معالجة الطلب. الرجاء المحاولة مرة أخرى لاحقًا.', m);
    }
};

handler.help = ['guessflag'];
handler.tags = ['game'];
handler.command = /^علم/i;

export default handler;
