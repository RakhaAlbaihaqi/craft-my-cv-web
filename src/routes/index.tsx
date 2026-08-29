import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, Download, Mail, MapPin, Phone } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import cvPdf from "@/assets/cv.pdf.asset.json";
import photo from "@/assets/rakha-photo.jpg.asset.json";
import {
  certificates,
  education,
  experiences,
  facts,
  profile,
  projects,
  skillGroups,
  softSkills,
  stats,
  workflow,
} from "@/lib/cv-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rakha Albaihaqi Yulianto — Web & Computer Vision Developer" },
      {
        name: "description",
        content:
          "Portofolio dan CV Rakha Albaihaqi Yulianto, lulusan Teknik Informatika Universitas Gunadarma. Pengembangan web menyeluruh, computer vision YOLOv8/YOLOv11, dan pengelolaan data.",
      },
      {
        property: "og:title",
        content: "Rakha Albaihaqi Yulianto — Web & Computer Vision Developer",
      },
      {
        property: "og:description",
        content:
          "Proyek WBS KPPU, penghitungan populasi ayam broiler dengan YOLOv11, dan deteksi warna YOLOv8. Lihat CV lengkap dan unduh sebagai PDF.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{lead}</p>}
      <div className="hairline mt-8" />
    </div>
  );
}

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section id="beranda" className="veil relative flex min-h-screen items-center pt-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
              <span className="size-1.5 rounded-full bg-gold" />
              {profile.status}
            </span>

            <h1 className="mt-7 font-display text-5xl leading-[0.98] tracking-tight sm:text-7xl">
              Rakha Albaihaqi
              <br />
              <span className="text-gold-gradient italic">Yulianto</span>
            </h1>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.roles.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground"
                >
                  {r}
                </span>
              ))}
            </div>

            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#proyek"
                className="rounded-sm bg-gold px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Lihat Proyek
              </a>
              <a
                href="#kontak"
                className="rounded-sm border border-border-strong px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:bg-surface"
              >
                Hubungi Saya
              </a>
              <Link
                to="/cv"
                className="rounded-sm border border-gold/40 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold/10"
              >
                Lihat / Unduh CV
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-5 font-mono text-[11px] text-muted-foreground">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-gold">
                <Mail className="size-3.5" /> {profile.email}
              </a>
              <a href={`tel:${profile.phones[0]}`} className="inline-flex items-center gap-2 hover:text-gold">
                <Phone className="size-3.5" /> {profile.phones[0]}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-3.5" /> {profile.location}
              </span>
            </div>
          </div>

          <div className="rise flex justify-center lg:justify-end" style={{ animationDelay: "160ms" }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-sm border border-border" />
              <div className="absolute -inset-4 rounded-sm border-t border-gold/30" />
              <img
                src={photo.url}
                alt={`Foto potret ${profile.name}`}
                className="relative aspect-[4/5] w-64 rounded-sm object-cover shadow-lift sm:w-80"
              />
              <div className="absolute -bottom-5 -left-5 rounded-sm border border-border bg-surface-raised px-4 py-2.5 shadow-elegant">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Berbasis di
                </p>
                <p className="mt-0.5 text-sm">Tangerang Selatan, ID</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#tentang"
          className="no-print absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-gold"
        >
          <span className="flex flex-col items-center gap-2">
            Gulir
            <ArrowDown className="size-3.5 animate-bounce" />
          </span>
        </a>
      </section>

      {/* QUOTE + STATS */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mx-auto max-w-3xl text-center font-display text-2xl italic leading-snug sm:text-3xl">
            &ldquo;{profile.quote}&rdquo;
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-border pl-4">
                <p className="font-display text-4xl text-gold">{s.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead
          eyebrow="Tentang"
          title="Mengubah data menjadi solusi yang dipakai"
        />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            {profile.about.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <dl className="space-y-5">
            {facts.map((f) => (
              <div key={f.label} className="border-b border-border pb-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
                  {f.label}
                </dt>
                <dd className="mt-1.5 text-sm text-muted-foreground">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* PENGALAMAN */}
      <section id="pengalaman" className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead
            eyebrow="Karier"
            title="Pengalaman Kerja"
            lead="Tiga peran yang membentuk cara saya bekerja: ketelitian data, koordinasi lapangan, dan pengembangan web internal."
          />
          <div className="mt-12 space-y-10">
            {experiences.map((e) => (
              <article
                key={e.org}
                className="grid gap-6 border-l border-border pl-6 lg:grid-cols-[0.9fr_1.6fr] lg:gap-12"
              >
                <div>
                  <span className="inline-block rounded-full border border-gold/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-gold">
                    {e.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl leading-tight">{e.org}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{e.role}</p>
                  <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                    {e.period} · {e.place}
                  </p>
                </div>
                <div>
                  <p className="text-sm italic text-muted-foreground">{e.note}</p>
                  <ul className="mt-4 space-y-2.5">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                        <span className="mt-2.5 size-1 shrink-0 rounded-full bg-gold/70" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PENDIDIKAN */}
      <section id="pendidikan" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead eyebrow="Latar Belakang" title="Pendidikan & Pelatihan" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-sm border border-border bg-surface/60 p-8 shadow-elegant">
            <h3 className="font-display text-3xl leading-tight">{education.school}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {education.place} · {education.degree}
            </p>
            <div className="hairline my-6" />
            <p className="text-[15px] leading-relaxed text-muted-foreground">{education.faculty}</p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
              Pelatihan yang diselesaikan
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.training.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-sm border border-border bg-surface/60 p-8 shadow-elegant">
            <p className="eyebrow">Cara Saya Bekerja</p>
            <div className="mt-6 space-y-7">
              {workflow.map((w) => (
                <div key={w.no} className="flex gap-5">
                  <span className="font-display text-2xl text-gold/60">{w.no}</span>
                  <div>
                    <h4 className="font-display text-xl">{w.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {w.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROYEK */}
      <section id="proyek" className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead
            eyebrow="Karya"
            title="Proyek & Riset Unggulan"
            lead="Dari sistem pelaporan nasional hingga model deteksi objek yang dilatih sendiri."
          />
          <div className="mt-12 space-y-6">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="group grid gap-6 rounded-sm border border-border bg-background/40 p-8 transition-colors hover:border-gold/30 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10"
              >
                <span className="font-display text-4xl text-gold/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
                    {p.kicker}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight transition-colors group-hover:text-gold sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-sm border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 lg:w-44 lg:border-l lg:border-border lg:pl-6">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-2xl text-gold">{m.value}</p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KEAHLIAN */}
      <section id="keahlian" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead
          eyebrow="Kemampuan"
          title="Keahlian & Kapabilitas"
          lead="Enam bidang yang saya gunakan sehari-hari, dari bahasa pemrograman hingga metodologi riset."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.no} className="bg-background p-7 transition-colors hover:bg-surface">
              <p className="font-mono text-[10px] tracking-[0.2em] text-gold/70">{g.no}</p>
              <h3 className="mt-3 font-display text-xl leading-tight">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-sm bg-surface-raised px-2 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
            Kemampuan Non-Teknis
          </p>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERTIFIKAT */}
      <section id="sertifikat" className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead
            eyebrow="Kredensial"
            title="Sertifikasi & Pelatihan"
            lead="Sepuluh sertifikat pelatihan, asesmen, dan webinar — sebagian besar dari Universitas Gunadarma."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {certificates.map((c) => (
              <div
                key={c.title}
                className="flex items-start justify-between gap-4 bg-background p-6 transition-colors hover:bg-surface"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold/80">
                    {c.tag}
                  </p>
                  <h3 className="mt-2 font-display text-lg leading-snug">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                </div>
                <span className="whitespace-nowrap font-mono text-[10px] text-muted-foreground">
                  {c.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="veil mx-auto max-w-6xl px-6 py-24">
        <SectionHead
          eyebrow="Mari Terhubung"
          title="Hubungi Saya"
          lead="Terbuka untuk peran pengembangan web, computer vision, maupun pengelolaan data. Silakan hubungi kapan saja."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="bg-background p-7 transition-colors hover:bg-surface"
          >
            <Mail className="size-4 text-gold" />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Email
            </p>
            <p className="mt-1.5 text-sm break-all">{profile.email}</p>
          </a>
          <a
            href={`tel:${profile.phones[0]}`}
            className="bg-background p-7 transition-colors hover:bg-surface"
          >
            <Phone className="size-4 text-gold" />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Telepon / WhatsApp
            </p>
            <p className="mt-1.5 text-sm">{profile.phones.join(" / ")}</p>
          </a>
          <div className="bg-background p-7">
            <MapPin className="size-4 text-gold" />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Lokasi
            </p>
            <p className="mt-1.5 text-sm">{profile.location}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-6 rounded-sm border border-gold/25 bg-gold/[0.04] p-8">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl">Butuh CV lengkap saya?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Lihat versi web yang rapi, atau unduh langsung sebagai PDF.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/cv"
              className="rounded-sm border border-border-strong px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:bg-surface"
            >
              Lihat CV
            </Link>
            <a
              href={cvPdf.url}
              download="CV_Rakha_Albaihaqi_Yulianto.pdf"
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="size-3.5" /> Unduh PDF
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>{profile.name}</span>
          <span>Curriculum Vitae · 2026</span>
        </div>
      </footer>
    </div>
  );
}
