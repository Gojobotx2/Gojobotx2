const handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    const text = `
*اللقب*
اختار شخصية انمي بتحبها و انا بقولك متوفر اللقب او لا
*الانمي*
الانمي اللي اخترت منه شخصيتك 
*من طرف*
دخلت الاستقبال عن طريق مين او عرفت الجروب عن طريق مين 
*ولد او بنت*

وبس كذا تحياتي 🤍🤍
`.trim();

    conn.sendMessage(m.chat, {
      text,
      contextInfo: {
        externalAdReply: {
          title: 'ᥡᥙᥒᥲ┇ᑲ᥆𝗍',
          body: "البوت الخاص بمملكة SPACE🚀",
          thumbnailUrl:'https://telegra.ph/file/7116c6426e496c317d83e.jpg',
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
handler.command = ['شرح','الشرح'];
handler.register = false;

export default handler;
