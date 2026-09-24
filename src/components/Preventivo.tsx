import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const tipiLavoro = [
  "Pavimento interno",
  "Rivestimento cucina / top",
  "Facciata esterna",
  "Bagno",
  "Altro",
];

export default function Preventivo() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Invio non riuscito.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Qualcosa è andato storto. Riprova."
      );
    }
  }

  return (
    <section id="preventivo" className="relative bg-basalt py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-brass text-sm mb-4">Preventivi</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-ink">
            Raccontaci il progetto, ti rispondiamo con una stima.
          </h2>
          <p className="mt-6 text-ink/60 leading-relaxed max-w-sm">
            Compila i campi con le informazioni che hai a disposizione: anche
            solo metri quadri e tipo di ambiente bastano per una prima
            valutazione. Il preventivo dettagliato arriva dopo il sopralluogo.
          </p>
        </div>

        <div className="md:col-span-7">
          {status === "success" ? (
            <div className="border border-brass/40 p-8 text-ink">
              <p className="font-display text-2xl mb-2">Richiesta inviata.</p>
              <p className="text-ink/70 text-sm">
                Grazie, abbiamo ricevuto i tuoi dati. Ti contattiamo entro 1-2
                giorni lavorativi per organizzare il sopralluogo.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-brass hover:text-ink transition-colors"
              >
                Invia un'altra richiesta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Nome e cognome" name="nome" required />
                <Field label="Telefono" name="telefono" type="tel" required />
              </div>

              <Field label="Email" name="email" type="email" required />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-ink/50 mb-2" htmlFor="tipo">
                    Tipo di lavoro
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    required
                    className="w-full bg-transparent border-b border-basalt-line focus:border-brass outline-none py-2 text-ink"
                  >
                    <option value="" className="bg-basalt">
                      Seleziona
                    </option>
                    {tipiLavoro.map((t) => (
                      <option key={t} value={t} className="bg-basalt">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <Field label="Metri quadri indicativi" name="mq" type="number" />
              </div>

              <div>
                <label className="block text-xs text-ink/50 mb-2" htmlFor="messaggio">
                  Descrivi il progetto
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  rows={4}
                  className="w-full bg-transparent border-b border-basalt-line focus:border-brass outline-none py-2 text-ink resize-none"
                  placeholder="Ambiente, materiale desiderato, tempistiche..."
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center bg-brass text-basalt px-7 py-3 text-sm font-medium hover:bg-ink transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Invio in corso…" : "Invia richiesta"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs text-ink/50 mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-basalt-line focus:border-brass outline-none py-2 text-ink"
      />
    </div>
  );
}
