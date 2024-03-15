let handler = async (m, { conn, text, command, usedPrefix }) => {
    let pp = './src/warn.jpg'
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    let user = global.db.data.users[who]
    let bot = global.db.data.settings[conn.user.jid] || {}
    let wm = "نص التحذير هنا" // يجب تعريفها
    let warntext = `*[❗] يرجى وضع منشن للشخص أو الرد على رسالة له @منشن*\n\n*—◉ مثال:*\n*${usedPrefix + command} @${global.suittag}*`
    if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
    user.warn = (user.warn || 0) + 1
  
    await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} حصلت على تحذير في هذه المجموعة!`, `*تحذيرات ${user.warn}/3*\n\n${wm}`, pp, [['📋 قائمة التحذيرات 📋', '#listwarn']], m, { mentions: [who] })
	
    if (user.warn >= 3) {
        if (!bot.restrict) return m.reply('*[❗] لم يتم تمكين القيود على مالك الروبوت (#تفعيل) استخدم هذا الامر لتمكين التحذيرات*')        
        user.warn = 0
        await m.reply(`لقد تم تحذيرك عدة مرات!!\n*@${who.split`@`[0]}* حتى وصلت إلى *3* تحذيرات سيتم طردك الآن 👽`, null, { mentions: [who]})
        await conn.groupRemove(m.chat, [who])
    } 
    return true
}
handler.command = /^(انقلع|انذار|warn|تحذير)$/i
handler.group = true
handler.owner = true
export default handler
