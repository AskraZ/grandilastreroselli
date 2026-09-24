import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="relative mx-auto max-w-6xl px-6 md:px-10 w-full grid md:grid-cols-12 gap-8 md:gap-10 items-center">
        <div className="md:col-span-7">
          <p className="text-brass text-sm mb-6 max-w-xs">
            Fornitura e posa di grandi lastre in pietra, gres porcellanato e marmo.
          </p>
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-medium text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-ink"
          >
            La misura esatta della pietra, dal blocco alla parete.
          </motion.h1>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-ink/70 max-w-md text-base leading-relaxed"
          >
            Roselli seleziona, taglia e posa lastre di grande formato per
            cucine, pavimenti e facciate. Un unico interlocutore dal
            sopralluogo alla posa finita.
          </motion.p>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href="#preventivo"
              className="inline-flex items-center bg-brass text-basalt px-7 py-3 text-sm font-medium hover:bg-ink transition-colors"
            >
              Richiedi un preventivo
            </a>
            <a href="#chi-siamo" className="text-sm text-ink/70 hover:text-ink transition-colors">
              Scopri chi siamo
            </a>
          </motion.div>

          <div className="hidden md:flex gap-10 mt-16">
            <div className="border-t border-basalt-line pt-3">
              <p className="font-display text-3xl text-ink">18</p>
              <p className="text-ink/50 text-xs mt-1">anni di attività</p>
            </div>
            <div className="border-t border-basalt-line pt-3">
              <p className="font-display text-3xl text-ink">1.600 m²</p>
              <p className="text-ink/50 text-xs mt-1">posati in media all'anno</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 self-stretch"
        >
          <div className="relative border border-basalt-line aspect-[4/5] w-full max-w-md mx-auto md:max-w-none overflow-hidden">
            {/* Sostituisci /images/hero-placeholder.svg con la foto reale
                (es. /images/hero.jpg) mantenendo lo stesso tag <img>. */}
            <img
              src="/images/IMG_0311.JPEG"
              alt="Posa di una grande lastra in pietra"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
