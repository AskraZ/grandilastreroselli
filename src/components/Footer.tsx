export default function Footer() {
  return (
    <footer className="bg-basalt text-ink/40 text-xs py-8 border-t border-basalt-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex flex-col sm:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Grandi Lastre Roselli. Tutti i diritti riservati.</p>
        <p>P.IVA 00000000000</p>
      </div>
    </footer>
  );
}
