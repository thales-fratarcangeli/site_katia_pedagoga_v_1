import { BookOpen, Heart } from "lucide-react"

const SOCIALS = [
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.5.2.9.46 1.3.86.4.4.66.8.86 1.3.17.4.37 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2-.2.5-.46.9-.86 1.3-.4.4-.8.66-1.3.86-.4.17-1 .37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42a3.5 3.5 0 0 1-1.3-.86 3.5 3.5 0 0 1-.86-1.3c-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.2-.5.46-.9.86-1.3.4-.4.8-.66 1.3-.86.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 3.3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 10.7a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Zm6.7-10.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
  },
  {
    label: "Facebook",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z",
  },
  {
    label: "YouTube",
    path: "M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.4.5A3 3 0 0 0 .5 7.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-4.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z",
  },
]

function SocialIcon({ path }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

const COLUMNS = [
  {
    title: "Categorias",
    links: ["Alfabetização", "Matemática", "Educação Infantil", "Datas Comemorativas", "Inglês"],
  },
  {
    title: "Ajuda",
    links: ["Como funciona", "Formas de pagamento", "Política de reembolso", "Fale conosco"],
  },
  {
    title: "Institucional",
    links: ["Sobre a Katia", "Seja um parceiro", "Termos de uso", "Privacidade"],
  },
]

const PAYMENTS = ["Pix", "Visa", "Master", "Elo", "Boleto"]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl gradient-warm shadow-coral">
                <BookOpen className="h-5 w-5 text-white" strokeWidth={2.4} />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Katia <span className="text-coral-400">Pedagógica</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-cream-100/70">
              Atividades pedagógicas em PDF prontas para imprimir. Feitas com
              carinho por quem entende de sala de aula.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-coral-500"
                >
                  <SocialIcon path={s.path} />
                </a>
              ))}
            </div>
          </div>

          {/* Colunas de links */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-base font-bold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-cream-100/70 transition hover:text-coral-400"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pagamentos */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <span className="text-sm text-cream-100/60">Pagamento 100% seguro:</span>
          <div className="flex flex-wrap justify-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-bold text-white"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Rodapé final */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-sm text-cream-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Katia Pedagógica. Todos os direitos reservados.</p>
          <p className="inline-flex items-center gap-1.5">
            Feito com <Heart className="h-4 w-4 fill-coral-500 text-coral-500" /> para professoras
          </p>
        </div>
      </div>
    </footer>
  )
}
