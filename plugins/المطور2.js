const handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let taguser = m.mentionedJid[0] || "user"; // تصحيح المنشن
    const text = `
*⚘اهلا و سهلا بك يا 『${taguser}』*

*↯رقم المطور:『 https://wa.me/message/RYOUR2E5SRFOL1 』*

*↯انستا المطور:『 https://www.instagram.com/gojosaturo_876?igsh=amxrYmMydTh0NDN3 』*
`.trim();

    conn.sendMessage(m.chat, {
      text,
      contextInfo: {
        externalAdReply: {
          title: 'ᥡᥙᥒᥲ┇ᑲ᥆𝗍',
          body: "البوت الخاص بمملكة SPACE🚀",
          thumbnailUrl:'https://telegra.ph/file/7116c6426e496c317d83e.jpg', // تصحيح حجم الصورة واسم الخاصية
          sourceUrl: 'https://www.instagram.com/gojosaturo_876?igsh=amxrYmMydTh0NDN3',
          mediaType: 2,
        }
      }
    }, { quoted: m });
  } catch (e) {
    conn.reply(m.chat, '❎ هناك خطأ في لائحة الاوامر', m);
    throw e;
  }
};

handler.help = ['استمارة'];
handler.tags = ['infobot'];
handler.command = ['معلومات_المطور'];
handler.register = false;

export default handler;
