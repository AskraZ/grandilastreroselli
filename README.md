# Grandi Lastre Roselli — sito vetrina

Sito one-page in React + TypeScript + Tailwind CSS, con form preventivi che
invia una email tramite una funzione serverless Vercel + Resend.

## 1. Sviluppo locale

```bash
npm install
npm run dev
```

Il sito si apre su `http://localhost:5173`. Il form preventivi non invierà
email finché non configuri Resend (punto 2) — in locale puoi comunque
testare l'interfaccia con `vercel dev` (vedi punto 4).

## 2. Configurare l'invio email (Resend)

Il progetto usa di default l'indirizzo mittente `onboarding@resend.dev`,
che **non richiede un dominio personalizzato** — utile se non vuoi
acquistare un dominio solo per le email.

⚠️ **Limite importante di `onboarding@resend.dev`:** puoi inviare
email solo all'indirizzo con cui ti sei registrato su Resend. Se provi a
mandarle a un altro indirizzo (es. una casella aziendale diversa), Resend
risponde con un errore 403. Per sbloccare l'invio a qualsiasi destinatario
serve verificare un dominio proprio (vedi in fondo a questa sezione).

1. Crea un account gratuito su [resend.com](https://resend.com), usando
   l'indirizzo email dove vuoi ricevere le richieste di preventivo.
2. In **API Keys**, crea una chiave e copiala.
3. Copia `.env.example` in `.env` e compila:
   ```
   RESEND_API_KEY=la_tua_chiave
   QUOTE_RECIPIENT_EMAIL=la_stessa_email_con_cui_ti_sei_registrato_su_resend
   ```

### Se in futuro vuoi inviare a un indirizzo diverso (es. un dominio aziendale)

Serve verificare un dominio tuo su Resend:
1. In **Domains** su Resend, aggiungi il dominio e segui i record DNS
   (TXT, DKIM, MX) da inserire presso il tuo provider.
2. Una volta verificato, in `api/send-quote.ts` cambia il campo `from` da
   `onboarding@resend.dev` a un indirizzo del tuo dominio, es.
   `preventivi@tuodominio.it`.
3. A quel punto `QUOTE_RECIPIENT_EMAIL` può essere qualsiasi indirizzo.

## 3. Struttura del progetto

```
src/
  components/
    Navbar.tsx       nav fissa con link di ancoraggio
    Hero.tsx          sezione Home
    About.tsx         sezione Chi siamo (con processo di lavoro)
    Preventivo.tsx     form di richiesta preventivo
    Contact.tsx        sezione Contatti
    Footer.tsx
  App.tsx
api/
  send-quote.ts       funzione serverless Vercel che invia l'email
```

Tutti i testi (indirizzo, telefono, anni di attività, ecc.) sono
contenuti placeholder: cercali nei rispettivi componenti e sostituiscili
con i dati reali dell'azienda prima di andare online.

## 4. Deploy su Vercel

### Opzione A — da GitHub (consigliata)
1. Crea un repository su GitHub e pusha questo progetto:
   ```bash
   git init
   git add .
   git commit -m "Sito Grandi Lastre Roselli"
   git branch -M main
   git remote add origin <url-del-tuo-repo>
   git push -u origin main
   ```
2. Vai su [vercel.com](https://vercel.com) → **Add New Project** →
   importa il repository.
3. Vercel rileva automaticamente Vite: lascia le impostazioni di default.
4. In **Settings → Environment Variables** aggiungi:
   - `RESEND_API_KEY`
   - `QUOTE_RECIPIENT_EMAIL`
5. Clicca **Deploy**. Ogni push su `main` farà un nuovo deploy automatico.

### Opzione B — da riga di comando
```bash
npm i -g vercel
vercel login
vercel        # primo deploy (preview)
vercel --prod # deploy in produzione
```
Ti chiederà le variabili d'ambiente al primo deploy, oppure impostale
dopo con:
```bash
vercel env add RESEND_API_KEY
vercel env add QUOTE_RECIPIENT_EMAIL
```

## 5. Collegare un dominio personalizzato

In Vercel: **Settings → Domains**, aggiungi `grandilastreroselli.it` (o il
dominio scelto) e segui le istruzioni per puntare i DNS.

## 6. Sostituire la foto nella Home

La sezione Home ha un riquadro a destra con un'immagine placeholder
(`public/images/hero-placeholder.svg`). Per usare una foto vera:

1. Metti il tuo file immagine in `public/images/` (es. `public/images/hero.jpg`).
   Formato verticale, minimo 900×1100 px, funziona meglio.
2. In `src/components/Hero.tsx` trova il tag `<img>` e cambia il `src`:
   ```tsx
   <img
     src="/images/hero.jpg"
     alt="Descrizione della foto"
     className="w-full h-full object-cover"
   />
   ```
3. Aggiorna anche l'attributo `alt` con una descrizione reale della foto
   (utile per SEO e accessibilità).

## 7. Personalizzazione rapida

- **Colori/font**: `tailwind.config.js`.
- **Testi placeholder**: direttamente nei componenti in `src/components`.
- **Logo**: al momento è testuale nella Navbar; per usare un'immagine,
  sostituisci il testo con un tag `<img>` in `Navbar.tsx`.
