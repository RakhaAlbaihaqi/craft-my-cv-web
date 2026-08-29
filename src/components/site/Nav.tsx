import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/lib/cv-data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#beranda" className="group flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-sm border border-border-strong font-mono text-[11px] tracking-widest text-gold">
            {profile.initials}
          </span>
          <span className="font-display text-lg italic tracking-tight">Rakha A. Y.</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                active === item.id ? "text-gold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold/70" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/cv"
            className="hidden rounded-sm border border-gold/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold/10 sm:block"
          >
            Lihat CV
          </Link>
          <button
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:text-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto grid max-w-6xl gap-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/cv"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm border border-gold/40 px-2 py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-gold"
            >
              Lihat / Unduh CV
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
