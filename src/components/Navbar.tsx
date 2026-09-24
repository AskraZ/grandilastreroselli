import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#preventivo", label: "Preventivi" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-basalt/90 backdrop-blur border-b border-basalt-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="font-display text-lg tracking-tightish text-ink">
          Grandi Lastre <span className="text-brass">Roselli</span>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-sm text-ink/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brass transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#preventivo"
          className="hidden md:inline-flex items-center border border-brass/60 px-5 py-2 text-sm text-brass hover:bg-brass hover:text-basalt transition-colors"
        >
          Richiedi preventivo
        </a>

        <button
          className="md:hidden text-ink"
          aria-label="Apri il menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-4 h-px bg-ink" />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-basalt border-t border-basalt-line px-6 py-4 space-y-4 text-ink/85">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
