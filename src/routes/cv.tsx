import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, Printer } from "lucide-react";
import cvPdf from "@/assets/cv.pdf.asset.json";
import photo from "@/assets/foto_cv.JPG.asset.json";
import {
  certificates,
  education,
  experiences,
  profile,
  projects,
  skillGroups,
  softSkills,
} from "@/lib/cv-data";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV Rakha Albaihaqi Yulianto — Unduh PDF" },
      {
        name: "description",
        content:
          "Curriculum vitae lengkap Rakha Albaihaqi Yulianto: pengalaman kerja, proyek YOLOv11 & WBS KPPU, keahlian teknis, dan sertifikasi. Tersedia untuk diunduh sebagai PDF.",
      },
      { property: "og:title", content: "CV Rakha Albaihaqi Yulianto — Unduh PDF" },
      {
        property: "og:description",
        content:
          "Versi cetak dan unduhan PDF dari CV Rakha Albaihaqi Yulianto, lulusan Teknik Informatika Universitas Gunadarma.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CvPage,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="print-page mt-9">
      <h2 className="eyebrow">{title}</h2>
      <div className="hairline mt-2 mb-5" />
      {children}
    </section>
  );
}

function CvPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="no-print border-b border-border bg-surface/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" /> Kembali
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-sm border border-border-strong px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-surface-raised"
            >
              <Printer className="size-3.5" /> Cetak
            </button>
            <a
              href={cvPdf.url}
              download="CV_Rakha_Albaihaqi_Yulianto.pdf"
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="size-3.5" /> Unduh PDF
            </a>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 py-12">
        <header className="print-page flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
              {profile.roles.join(" · ")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{profile.summary}</p>
          </div>
          <img
            src={photo.url}
            alt={`Foto ${profile.name}`}
            className="h-32 w-[6.5rem] rounded-sm border border-border object-cover"
          />
        </header>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-y border-border py-3 font-mono text-[11px] text-muted-foreground">
          <span>{profile.phones.join(" / ")}</span>
          <span>{profile.email}</span>
          <span>{profile.location}</span>
        </div>

        <Block title="Pendidikan">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="font-display text-xl">{education.degree}</h3>
              <p className="text-sm text-muted-foreground">
                {education.school} — {education.place}
              </p>
            </div>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{education.faculty}</p>
        </Block>

        <Block title="Pengalaman Kerja">
          <div className="space-y-6">
            {experiences.map((e) => (
              <div key={e.org} className="print-page">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg">{e.role}</h3>
                  {e.period && (
                    <span className="font-mono text-[11px] text-muted-foreground">{e.period}</span>
                  )}
                </div>
                <p className="text-sm text-gold/90">
                  {e.org} — {e.place}
                </p>
                <p className="mt-1 text-xs italic text-muted-foreground">{e.note}</p>
                <ul className="mt-2 space-y-1.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-gold/70" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Proyek & Riset">
          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.title} className="print-page grid gap-4 sm:grid-cols-[10rem_1fr]">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  className="h-24 w-full rounded-sm border border-border object-cover object-top sm:h-20"
                />
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg">{p.title}</h3>
                    <span className="font-mono text-[11px] text-muted-foreground">{p.kicker}</span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-gold/80">{p.stack.join(" · ")}</p>
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Keahlian Teknis">
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <p className="text-sm font-medium">{g.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{g.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Kemampuan Non-Teknis">
          <p className="text-sm text-muted-foreground">{softSkills.join(" · ")}</p>
        </Block>

        <Block title="Sertifikasi & Pelatihan">
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {certificates.map((c) => (
              <li key={c.title} className="flex justify-between gap-3 text-sm text-muted-foreground">
                <span>{c.title}</span>
                <span className="whitespace-nowrap font-mono text-[11px]">{c.date}</span>
              </li>
            ))}
          </ul>
        </Block>
      </article>
    </div>
  );
}
