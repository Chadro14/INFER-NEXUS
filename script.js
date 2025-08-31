const botNote = `
  📌 NOTE DU BOT :  
  Ce bot est une création exclusive, conçu pour l'efficacité, le style et la puissance. Chaque commande, chaque action, reflète l'esprit d'un roi des ténèbres numériques.

  🔱 Nom : InferNexus  
  👤 Créateur : Mr Demon  
  ⚔️ But : Automatiser avec force. Dominer avec élégance.  
  💬 Message : "Le silence du code crie plus fort que les mots."
`;
addMessage(botNote, "bot");

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.classList.add("msg", type);
  // Utilisation de innerHTML pour prendre en charge les sauts de ligne
  msg.innerHTML = text.replace(/\n/g, '<br>');
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}
