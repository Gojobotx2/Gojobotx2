function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator);
  const contacts = data.map(([id, name]) => [id, name]);

  this.sendContact(m.chat, contacts, m);
}

function sendMessageToContact(contactId, message) {
  this.sendMessage(contactId, message);
}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'مطور', 'المطور', 'المالك'] 

export default handler
