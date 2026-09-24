import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito." });
  }

  const { nome, telefono, email, tipo, mq, messaggio } = req.body ?? {};

  if (!nome || !telefono || !email || !tipo) {
    return res.status(400).json({ error: "Compila tutti i campi obbligatori." });
  }

  try {
    const { data, error } = await resend.emails.send({
      // Indirizzo di test fornito da Resend: funziona senza un dominio
      // personalizzato, ma SOLO se il destinatario (QUOTE_RECIPIENT_EMAIL)
      // è la stessa email con cui ti sei registrato su Resend. Se in futuro
      // acquisti un dominio, potrai sostituirlo con uno tipo
      // "preventivi@tuodominio.it" dopo averlo verificato su resend.com/domains,
      // e a quel punto potrai inviare a qualsiasi destinatario.
      from: "Preventivi Roselli <onboarding@resend.dev>",
      to: process.env.QUOTE_RECIPIENT_EMAIL as string,
      replyTo: email,
      subject: `Nuova richiesta preventivo — ${nome}`,
      html: `
        <h2>Nuova richiesta di preventivo</h2>
        <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
        <p><strong>Telefono:</strong> ${escapeHtml(telefono)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Tipo di lavoro:</strong> ${escapeHtml(tipo)}</p>
        <p><strong>Metri quadri indicativi:</strong> ${escapeHtml(mq ?? "-")}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${escapeHtml(messaggio ?? "-").replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error(error);
      return res.status(502).json({ error: error.message || "Invio email non riuscito." });
    }

    console.log("Email inviata:", data?.id);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Invio email non riuscito. Riprova più tardi." });
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
