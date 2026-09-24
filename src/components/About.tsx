const steps = [
  {
    n: "1",
    title: "Sopralluogo e misura",
    text: "Rileviamo gli ambienti e valutiamo formati, spessori e finiture più adatti al progetto.",
  },
  {
    n: "2",
    title: "Selezione della lastra",
    text: "Scegliamo insieme al cliente la lastra in cava o in showroom, verificando vene e lotto.",
  },
  {
    n: "3",
    title: "Taglio su misura",
    text: "Tagliamo a controllo numerico secondo i disegni tecnici, riducendo sfridi e tempi di posa.",
  },
  {
    n: "4",
    title: "Posa e finitura",
    text: "Posiamo con squadre specializzate in grandi formati, con sigillature e finiture a regola d'arte.",
  },
];

export default function About() {
  return (
    <section id="chi-siamo" className="relative bg-travertine text-basalt py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-stone-dark text-sm mb-4">Chi siamo</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-basalt">
              Tre generazioni di lavorazione della pietra a misura di grande formato.
            </h2>
            <p className="mt-6 text-basalt/70 leading-relaxed max-w-md">
              Grandi Lastre Roselli nasce come laboratorio artigiano di
              piastrellisti e cresce specializzandosi nel taglio e nella posa
              di lastre di grande formato: gres porcellanato, marmo e pietra
              naturale, per abitazioni private e progetti di interior design.
              
            </p>
          </div>

          <div className="md:col-span-7">
            <ol className="space-y-0">
              {steps.map((s, i) => (
                <li
                  key={s.n}
                  className={`flex gap-6 py-7 ${
                    i !== 0 ? "border-t border-basalt/15" : ""
                  }`}
                >
                  <span className="font-display text-2xl text-stone shrink-0 w-8">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-medium text-basalt">{s.title}</h3>
                    <p className="mt-1.5 text-basalt/65 text-sm leading-relaxed max-w-sm">
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
