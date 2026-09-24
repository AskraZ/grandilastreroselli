export default function Contact() {
  return (
    <section id="contatti" className="bg-travertine text-basalt py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="text-stone-dark text-sm mb-4">Contatti</p>
          <h2 className="font-display text-4xl leading-tight">
            Passa in laboratorio o scrivici.
          </h2>
        </div>

        <div className="md:col-span-7 grid sm:grid-cols-2 gap-10 text-sm">
          <div>
            <p className="text-basalt/50 mb-2">Sede</p>
            <p className="text-basalt leading-relaxed">
              Via delle Cave, 24
              <br />
              98100 Messina (ME)
            </p>
          </div>
          <div>
            <p className="text-basalt/50 mb-2">Contatti diretti</p>
            <p className="text-basalt leading-relaxed">
              <a href="tel:+39090123456" className="hover:text-stone-dark">
                +39 090 123 456
              </a>
              <br />
              <a href="mailto:info@grandilastreroselli.it" className="hover:text-stone-dark">
                info@grandilastreroselli.it
              </a>
            </p>
          </div>
          <div>
            <p className="text-basalt/50 mb-2">Orari</p>
            <p className="text-basalt leading-relaxed">
              Lun – Ven, 8:00 – 18:00
              <br />
              Sabato su appuntamento
            </p>
          </div>
          <div>
            <p className="text-basalt/50 mb-2">Zona di lavoro</p>
            <p className="text-basalt leading-relaxed">
              Messina e provincia
              <br />
              Sopralluoghi anche fuori zona su richiesta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
