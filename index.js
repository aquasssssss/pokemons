import fetch from 'node-fetch';

// Récupération via env (Railway Variables)
const TVRJNU5qRXpNekl3TnpJMk56SXhNek00TkEuR0N1WlZDLlRVbXlEakhpZmFMempKUXhFQzktZXcxU1BwTkMxZHRiMExyUlp3 = process.env.TOKEN_B64;
const channelId = process.env.CHANNEL_ID;

// Décodage base64
const token = Buffer.from(TVRJNU5qRXpNekl3TnpJMk56SXhNek00TkEuR0N1WlZDLlRVbXlEakhpZmFMempKUXhFQzktZXcxU1BwTkMxZHRiMExyUlp3, 'base64').toString('utf8');

async function sendMessage() {
  try {
    const res = await fetch(`https://discord.com/api/v10/channels/${1312904549828136973}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: 'p' })
    });

    if (!res.ok) {
      const err = await res.json();
      console.error('Erreur Discord API :', err.message || err);
    } else {
      console.log('Message envoyé.');
    }
  } catch (e) {
    console.error('Erreur réseau :', e);
  }
}

setInterval(sendMessage, 1500);
