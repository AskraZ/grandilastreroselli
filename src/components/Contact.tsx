export default function Contact() {
  return (
    <section id="contatti" className="bg-travertine text-basalt py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="text-stone-dark text-sm mb-4">Contatti</p>
          <h2 className="font-display text-4xl leading-tight">
          </h2>
        </div>

        <div className="md:col-span-7 grid sm:grid-cols-2 gap-10 text-sm">
          <div>
            <p className="text-basalt/50 mb-2">Contatti diretti</p>
            <p className="text-basalt leading-relaxed">
              <a href="tel:+393519060795" className="hover:text-stone-dark">
                +39 351 906 0795
              </a>
              <br />
              <a href="mailto:info@gioeleroselli87@gmail.com" className="hover:text-stone-dark">
                gioeleroselli87@gmail.com
              </a>
            </p>
          </div>
          <div>
            <p className="text-basalt/50 mb-2">Zona di lavoro</p>
            <p className="text-basalt leading-relaxed">
              Catania e provincia
              <br />
              Sopralluoghi anche fuori zona su richiesta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
