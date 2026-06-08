import { HeroVideo } from "@/components/hero-video";
import { FadeUp } from "@/components/fade-up";
import { ScrollReveal, ContadorAnimado } from "@/components/animacoes";
import { MatriculaForm } from "@/components/matricula-form";
import { trilhas, totalAulas, xpTotalDisponivel } from "@/content/curriculo";
import { Icon, IconName } from "@/components/icons";
import { SectionVideo, SECTION_VIDEOS } from "@/components/section-video";
import type { Trilha } from "@/content/types";
import Image from "next/image";
import Link from "next/link";

/* ─── Typography (responsive clamp) ─── */
const h1 = "font-display text-[clamp(2rem,7vw,4.5rem)] font-extrabold leading-[1.0] tracking-[-0.04em]";
const h2 = "font-display text-[clamp(1.3rem,4vw,2.4rem)] font-bold tracking-[-0.03em]";
const h3 = "font-display text-[clamp(1rem,2.5vw,1.15rem)] font-semibold tracking-[-0.01em]";

/* ─── Images ─── */
const IMG = {
  balcao: "/hero/equipe-farmacia.jpg",
  medicamentos: "/pharmacy/photo-1578496781985-452d4a934d50.jpg",
  pressao: "/pharmacy/photo-1584982751601-97dcc096659c.jpg",
  diabetes: "/pharmacy/photo-1579154204601-01588f351e67.jpg",
  hormonios: "/pharmacy/photo-1559757175-5700dde675bc.jpg",
};

const TRILHA_EMOJI: Record<string, string> = {
  perfumaria: "🧴", medicamentos: "💊", operacional: "📋", encantamento: "🤝",
  fundamentos: "📖", pratica: "✍️", vendas: "🤝",
};

// Keyframes moved to globals.css — reduced HTML ~3KB

const CONFETTI = [
  { c:"bg-green-400", d:"0s", l:"10%", s:"w-1.5 h-1.5" },{ c:"bg-yellow-400", d:"0.8s", l:"30%", s:"w-2 h-2" },
  { c:"bg-emerald-400", d:"1.5s", l:"55%", s:"w-1.5 h-2" },{ c:"bg-orange-300", d:"2s", l:"75%", s:"w-2 h-1.5" },
  { c:"bg-green-300", d:"2.5s", l:"90%", s:"w-1.5 h-2" },
];

const JORNADA = [
  { icon:"smile" as IconName, title:"Acolhimento", desc:"Receba cada cliente com empatia e técnica." },
  { icon:"book" as IconName, title:"Conhecimento", desc:"Domine medicamentos, legislação e saúde." },
  { icon:"zap" as IconName, title:"Prática", desc:"Simulações reais de balcão." },
  { icon:"graduation" as IconName, title:"Certificação", desc:"Certificado ao concluir." },
];

export default function HomePage() {
  const total = totalAulas();

  return (
    <div className="relative min-h-dvh bg-background text-foreground overflow-x-hidden grain-overlay pb-[env(safe-area-inset-bottom,0px)]">

      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[50vmax] w-[50vmax] bg-gradient-to-br from-green-400/8 to-emerald-600/5 rounded-full blur-[100px] blob-morph" />
        <div className="absolute top-[30%] -right-40 h-[40vmax] w-[40vmax] bg-gradient-to-br from-yellow-400/6 to-amber-500/4 rounded-full blur-[100px] blob-morph" style={{animationDelay:'-5s'}} />
        <div className="absolute -bottom-40 left-[40%] h-[35vmax] w-[35vmax] bg-gradient-to-br from-green-300/5 to-emerald-500/5 rounded-full blur-[100px] blob-morph" style={{animationDelay:'-10s'}} />
      </div>

      {/* ═══ HERO — mobile-first cinematic ═══ */}
      <section className="relative flex min-h-[90dvh] min-h-[100svh] items-center overflow-hidden bg-[#020617]">
        <HeroVideo />
        <div className="pointer-events-none absolute inset-0 z-20 transition-all duration-700"
          style={{ background: 'radial-gradient(800px at 50% 50%, rgba(74,222,128,0.08), transparent 60%)' }}
        />

        <div className="relative z-40 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto sm:mx-0">
            {/* Badge */}
            <div className="mb-5 sm:mb-6 tilt-in" style={{animationDelay:'0.2s'}}>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium tracking-wide text-green-300 backdrop-blur-md ripple">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />
                <Icon name="heart" size={10} />
                <span className="ml-0.5">Formação gratuita para quem quer cuidar</span>
              </div>
            </div>

            {/* Title */}
            <h1 className={`${h1} text-white text-center sm:text-left`}>
              {"Seja a pessoa que ".split("").map((c,i)=>(
                <span key={i} className="letter-pop" style={{animationDelay:`${0.6+i*0.03}s`}}>{c}</span>
              ))}
              <span className="bg-gradient-to-r from-green-300 via-green-400 to-emerald-200 bg-clip-text text-transparent gradient-shift">
                {"leva saúde".split("").map((c,i)=>(
                  <span key={i} className="letter-pop" style={{animationDelay:`${1.5+i*0.04}s`}}>{c}</span>
                ))}
              </span>
              {" a quem precisa".split("").map((c,i)=>(
                <span key={i} className="letter-pop" style={{animationDelay:`${2.2+i*0.03}s`}}>{c}</span>
              ))}
            </h1>

            <p className="mt-4 sm:mt-5 max-w-xl mx-auto sm:mx-0 text-sm sm:text-base lg:text-lg leading-relaxed text-white/50 tilt-in text-center sm:text-left" style={{animationDelay:'2.8s'}}>
              "A primeira mão que um cliente estende quando busca cuidado."
            </p>

            {/* CTAs - full width on mobile */}
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 tilt-in" style={{animationDelay:'3.2s'}}>
              <Link href="#feed"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-white shadow-[0_8px_40px_rgba(76,161,93,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_60px_rgba(76,161,93,0.5)] active:scale-[0.97] min-h-[48px]">
                <Icon name="zap" size={16} />
                <span>Começar agora — é gratuito</span>
                <Icon name="arrow" size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#ser-aluno"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-white/20 bg-white/5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-green-400/40 hover:bg-white/10 active:scale-[0.97] min-h-[48px]">
                <Icon name="smile" size={16} />
                Quero ser aluno
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 sm:mt-10 flex justify-center sm:justify-start gap-6 sm:gap-8 lg:gap-14 tilt-in flex-wrap" style={{animationDelay:'3.8s'}}>
              {[
                { icon:"heart" as IconName, value:"1.200+", label:"vidas", color:"text-rose-400" },
                { icon:"users" as IconName, value:"6", label:"trilhas", color:"text-green-400" },
                { icon:"star" as IconName, value:"∞", label:"gratuito", color:"text-yellow-400" },
              ].map((s)=>(
                <div key={s.label} className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className={`text-xl sm:text-2xl font-bold ${s.color} tabular-nums`}>
                    {s.value==="∞" ? "∞" : s.value.includes("+") ? (
                      <ContadorAnimado valor={parseInt(s.value)} sufixo="+" duracao={2000} />
                    ) : s.value}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.12em] text-white/35 flex items-center gap-1">
                    <Icon name={s.icon} size={8} sm-size={10} className={s.color} />
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MISSÃO ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-emerald-950 to-forest-950 py-16 sm:py-24">
        <SectionVideo {...SECTION_VIDEOS.missao} />
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {CONFETTI.map((c,i)=>(
            <div key={i} className={`absolute ${c.c} ${c.s} rounded-sm opacity-20 sm:opacity-30`}
              style={{left:c.l,top:"-5%",animation:`confetti-fall ${6+i*0.5}s ${c.d} linear infinite`}} />
          ))}
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 text-center">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-yellow-300 backdrop-blur-sm mb-4 sm:mb-6">
              <Icon name="star" size={10} />
              Sua jornada importa
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <h2 className={`${h2} text-white max-w-3xl mx-auto px-2`}>
              Cada atendimento é uma chance de{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-200 bg-clip-text text-transparent gradient-shift">
                transformar um dia
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-white/60 px-4">
              Um cliente entra na farmácia com dor, dúvida ou medo. Você pode ser a pessoa que ouve, orienta e acolhe.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300}>
            <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 sm:px-0">
              {[
                { icon:"heart" as IconName, title:"Empatia que cura", desc:"Entender a dor do outro é o primeiro passo.", color:"text-rose-400" },
                { icon:"compass" as IconName, title:"Técnica que orienta", desc:"Conhecimento sólido para recomendar com segurança.", color:"text-green-400" },
                { icon:"globe" as IconName, title:"Saúde que alcança", desc:"Cada pessoa bem atendida leva saúde para a família.", color:"text-yellow-400" },
              ].map((item,i)=>(
                <div key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-green-400/30 hover:shadow-xl hover:shadow-green-500/10">
                  <span className={`mb-3 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-400/10 ring-1 ring-green-400/20 group-hover:ring-green-400/40 group-hover:scale-110 transition-all duration-300`}>
                    <Icon name={item.icon} size={20} sm-size={24} className={item.color} />
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs sm:text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ JORNADA ═══ */}
      <section className="relative overflow-hidden bg-surface py-16 sm:py-24">
        <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-green-500/5 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-yellow-500/5 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-green-400 backdrop-blur-sm mb-3 sm:mb-4">
                <Icon name="compass" size={10} />
                Sua evolução
              </div>
              <h2 className={`${h2} px-2`}>
                Como você vai{" "}
                <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent gradient-shift">
                  transformar vidas
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line - hidden on mobile, visible on sm+ */}
            <div className="hidden sm:block absolute left-[30px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400/40 via-green-500/30 to-transparent" style={{left:"50%",marginLeft:"-1px"}}>
              <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-green-500 to-transparent animate-pulse" style={{animationDuration:'3s'}} />
            </div>

            <div className="space-y-8 sm:space-y-12">
              {JORNADA.map((passo,i)=>(
                <ScrollReveal key={passo.title} direction={i%2===0?"up":"up"} delay={i*100}>
                  <div className={`relative flex items-center gap-4 sm:gap-10 ${i%2===0?"sm:flex-row":"sm:flex-row-reverse"}`}>
                    {/* Content */}
                    <div className={`flex-1 ${i%2===0?"sm:text-right":"sm:text-left"}`}>
                      <div className={`inline-block ${i%2===0?"sm:text-right":"sm:text-left"}`}>
                        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-green-500 mb-1">
                          <Icon name="zap" size={8} sm-size={10} />
                          Passo {i+1}
                        </span>
                        <h3 className={`${h3} mt-0.5`}>{passo.title}</h3>
                        <p className="mt-1 text-xs sm:text-sm text-muted max-w-xs">{passo.desc}</p>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="relative z-10 flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30 ripple">
                      <Icon name={passo.icon} size={18} sm-size={24} />
                    </div>
                    {/* Spacer */}
                    <div className="flex-1 hidden sm:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GAME CENTER — GAMIFICAÇÃO ELEVADA ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-emerald-900 to-forest-950 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(74,222,128,0.06),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[0,1,2,3,4].map(i=>(
            <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-yellow-400/20 shimmer-particle"
              style={{left:`${10+i*20}%`,top:`${20+i*15}%`,animationDelay:`${i*1.2}s`}} />
          ))}
        </div>
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-yellow-300 backdrop-blur-sm mb-3 sm:mb-4 pulse-glow">
                <Icon name="sparkles" size={10} />
                Game Center
              </div>
              <h2 className={`${h2} text-white px-2`}>
                Aprenda jogando —{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-200 bg-clip-text text-transparent gradient-shift">
                  evolua mais rápido
                </span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/50">Ganhe XP, suba de nível, colecione badges e dispute o ranking</p>
            </div>
          </ScrollReveal>

          {/* Stats banner */}
          <ScrollReveal direction="none" delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {[
                { icon:"zap" as IconName, value: 2840, suffix:"", label:"XP total", color:"text-yellow-400", bg:"from-yellow-500/10" },
                { icon:"trending" as IconName, value: 7, suffix:" dias", label:"Streak atual", color:"text-orange-400", bg:"from-orange-500/10" },
                { icon:"star" as IconName, value: 12, suffix:"", label:"Badges", color:"text-green-400", bg:"from-green-500/10" },
                { icon:"award" as IconName, value: 5, suffix:"", label:"Ranking", color:"text-rose-400", bg:"from-rose-500/10" },
              ].map((s,i)=>(
                <div key={s.label} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${s.bg} to-transparent p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:-translate-y-1`}>
                  <span className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 mb-2 sm:mb-3`}>
                    <Icon name={s.icon} size={16} sm-size={20} className={s.color} />
                  </span>
                  <div className={`text-lg sm:text-2xl font-bold ${s.color} tabular-nums`}>
                    {typeof s.value === 'number' ? <ContadorAnimado valor={s.value} sufixo={s.suffix} duracao={2000} /> : s.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/40 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Progresso + Level */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 mb-8 sm:mb-10">
            {/* Level card */}
            <ScrollReveal direction="up" delay={150}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-400/10 ring-2 ring-yellow-400/30 text-2xl sm:text-3xl">🏆</span>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-white">Nível 4</div>
                      <div className="text-[10px] sm:text-xs text-white/50">Atendente Premium</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg sm:text-xl font-bold text-yellow-400 tabular-nums"><ContadorAnimado valor={2840} duracao={2000} /></div>
                    <div className="text-[10px] sm:text-xs text-white/40">de 5.000 XP</div>
                  </div>
                </div>
                <div className="h-2.5 sm:h-3 rounded-full bg-white/10 overflow-hidden p-[1px]">
                  <div className="h-full rounded-full bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-500 gradient-shift" style={{width:"56%"}} />
                </div>
                <div className="flex justify-between text-[10px] sm:text-xs text-white/30 mt-1.5">
                  <span>Nível 3</span>
                  <span>Nível 5</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Streak card */}
            <ScrollReveal direction="up" delay={200}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl float-y">🔥</span>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-white">Sequência de <span className="text-orange-400">7 dias</span></div>
                      <div className="text-[10px] sm:text-xs text-white/50">Não quebre sua streak!</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/40">Meta: 30 dias</div>
                    <div className="text-lg sm:text-xl font-bold text-orange-400">23%</div>
                  </div>
                </div>
                <div className="flex gap-1.5 sm:gap-2">
                  {['D','S','T','Q','Q','S','S'].map((d,i)=>(
                    <div key={i} className={`flex-1 flex flex-col items-center gap-1 rounded-lg py-1.5 sm:py-2 text-[10px] sm:text-xs ${
                      i < 5 ? 'bg-green-500/30 text-green-300' : 'bg-white/5 text-white/30'
                    }`}>
                      <span className="font-bold">{d}</span>
                      <span className={`h-1.5 w-1.5 rounded-full ${i < 5 ? 'bg-green-400' : 'bg-white/10'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Missões diárias */}
          <ScrollReveal direction="none" delay={250}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="flex items-center gap-2">
                  <Icon name="target" size={16} sm-size={20} className="text-green-400" />
                  <span className="text-sm sm:text-base font-bold text-white">Missões diárias</span>
                </div>
                <Link href="/missoes" className="flex items-center gap-1 text-[10px] sm:text-xs text-green-400 hover:text-green-300 transition-colors min-h-[44px] inline-flex items-center">
                  Ver todas <Icon name="arrow" size={10} />
                </Link>
              </div>
              <div className="grid gap-3">
                {[
                  { icon:"book", title:"Assistir 1 aula", xp:"+50 XP", done:true, color:"text-green-400" },
                  { icon:"zap", title:"Acertar quiz", xp:"+30 XP", done:true, color:"text-yellow-400" },
                  { icon:"trending", title:"Streak de 3 dias", xp:"+100 XP", done:false, color:"text-orange-400" },
                  { icon:"message", title:"Perguntar ao Tutor IA", xp:"+20 XP", done:false, color:"text-blue-400" },
                ].map((q,i)=>(
                  <div key={i} className="flex items-center gap-3 sm:gap-4 rounded-xl bg-white/5 p-3 sm:p-3.5 transition-all hover:bg-white/10">
                    <span className={`flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg ${
                      q.done ? 'bg-green-500/20' : 'bg-white/5'
                    } ring-1 ring-white/10`}>
                      <Icon name={q.icon as IconName} size={14} sm-size={18} className={q.done ? 'text-green-400' : 'text-white/40'} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs sm:text-sm font-semibold ${q.done ? 'text-green-300 line-through' : 'text-white'}`}>{q.title}</span>
                        {q.done && <span className="text-green-400 text-xs">✓</span>}
                      </div>
                      <span className={`text-[10px] sm:text-xs ${q.done ? 'text-green-400/50' : 'text-yellow-400'}`}>{q.xp}</span>
                    </div>
                    {!q.done && (
                      <Link href="/missoes" className="shrink-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-3 sm:px-4 py-3 sm:py-3 text-[10px] sm:text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95 min-h-[44px] inline-flex items-center">
                        Fazer
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FEED — CONTEÚDO ═══ */}
      <div id="feed" className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <ScrollReveal direction="none">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-green-400 backdrop-blur-sm mb-3 sm:mb-4">
              <Icon name="book" size={10} />
              O conteúdo mais completo
            </div>
            <h2 className={`${h2} px-2`}>
              Tudo o que você precisa{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent gradient-shift">
                em um só lugar
              </span>
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted">{total} aulas · 6 trilhas</p>
          </div>
        </ScrollReveal>

        {/* Trilhas carousel */}
        <ScrollReveal direction="none" delay={100}>
          <div className="mb-10 sm:mb-14">
            <div className="flex gap-3 sm:gap-5 overflow-x-auto pb-3 sm:pb-4 snap-x snap-mandatory scrollbar-none -mx-4 sm:mx-0 px-4 sm:px-0">
              {trilhas.slice(0,6).map((t,i)=>(
                <Link key={t.id} href={`/trilhas/${t.id}`}
                  className="group snap-start shrink-0 flex flex-col items-center gap-2 sm:gap-3 rounded-2xl border border-border/60 bg-gradient-to-b from-surface to-muted/10 p-4 sm:p-6 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:border-green-400/40 hover:shadow-xl hover:shadow-green-500/10 w-[110px] sm:w-[140px] tilt-in"
                  style={{animationDelay:`${i*0.08}s`}}>
                  <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-green-400/10 text-2xl sm:text-3xl ring-2 ring-green-400/20 group-hover:ring-green-400/50 group-hover:scale-110 sm:group-hover:scale-125 transition-all duration-500">
                    {TRILHA_EMOJI[t.id] ?? "📚"}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-center leading-tight text-foreground/80">{t.titulo}</span>
                  <span className="text-[9px] sm:text-[10px] text-muted flex items-center gap-1">
                    <Icon name="book" size={8} sm-size={10} />
                    {t.modulos.reduce((s,m)=>s+m.aulas.length,0)} aulas
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-6 sm:space-y-8 px-2 sm:px-0">
          {/* CARD 1 */}
          <FadeUp>
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 bg-gradient-to-br from-surface to-muted/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="relative h-44 sm:h-52 lg:h-64 overflow-hidden bg-forest-900">
                <Image src={IMG.balcao} alt="Equipe de farmácia atendendo cliente no balcão com acolhimento" fill className="object-cover opacity-60 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-700 sm:duration-1000" sizes="(max-width:640px) 100vw, (max-width:1024px) 75vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-6 flex items-center gap-1.5 sm:gap-2">
                  <span className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg">
                    <Icon name="zap" size={12} sm-size={16} className="text-white" />
                  </span>
                  <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-white">
                    🧑‍⚕️ Atendimento que transforma
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-7">
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3 text-[10px] sm:text-xs">
                  <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-green-600 dark:text-green-400 font-medium">
                    <Icon name="play" size={10} sm-size={12} />
                    Simulação
                  </span>
                  <span className="text-muted">·</span>
                  <span className="text-muted flex items-center gap-1"><Icon name="clock" size={10} sm-size={12} />2 min</span>
                </div>
                <h3 className={`${h3} text-foreground`}>O antes e depois de um atendimento</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted leading-relaxed line-clamp-2 sm:line-clamp-none">
                  Uma senhora chega com dor de cabeça. Veja como uma escuta atenta transforma o cuidado.
                </p>
                <div className="mt-3 sm:mt-5 grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-200/50 bg-gradient-to-br from-emerald-50/80 to-green-50/50 dark:from-emerald-950/20 dark:to-green-950/10 p-3 sm:p-4">
                    <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs font-semibold mb-1.5 sm:mb-2">
                      <Icon name="check" size={10} sm-size={12} /> Abordagem consultiva
                    </div>
                    <p className="text-[11px] sm:text-xs leading-relaxed text-foreground/80">
                      <span className="font-medium">Cliente:</span> &ldquo;Bom dia! Estou com dor de cabeça...&rdquo;<br />
                      <span className="font-medium text-emerald-600 dark:text-emerald-400">Atendente:</span> &ldquo;Tem alergia a algum remédio?&rdquo;
                    </p>
                    <div className="mt-1.5 flex items-center gap-1 text-[10px] sm:text-xs text-emerald-600 dark:text-emerald-400">
                      <Icon name="smile" size={10} sm-size={12} /> Paciente acolhida
                    </div>
                  </div>
                  <div className="rounded-xl border border-rose-200/50 bg-gradient-to-br from-rose-50/80 to-red-50/50 dark:from-rose-950/20 dark:to-red-950/10 p-3 sm:p-4">
                    <div className="flex items-center gap-1 text-rose-500 dark:text-rose-400 text-[10px] sm:text-xs font-semibold mb-1.5 sm:mb-2">
                      <Icon name="close" size={10} sm-size={12} /> O que evitar
                    </div>
                    <p className="text-[11px] sm:text-xs leading-relaxed text-foreground/80">
                      <span className="font-medium">Atendente:</span> &ldquo;Toma dipirona? É o que resolve.&rdquo;
                    </p>
                    <div className="mt-1.5 flex items-center gap-1 text-[10px] sm:text-xs text-rose-500">
                      <Icon name="trending" size={10} sm-size={12} className="rotate-180" /> Cliente sai sem confiança
                    </div>
                  </div>
                </div>
                <Link href="/trilhas/medicamentos" className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-green-600 dark:text-green-400 group/link">
                  Explorar trilha
                  <Icon name="arrow" size={12} sm-size={14} className="group-hover/link:translate-x-1 sm:group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* CARD 2 — Grade */}
          <FadeUp delay={100}>
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 bg-gradient-to-br from-surface to-muted/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="relative h-28 sm:h-36 lg:h-44 overflow-hidden bg-gradient-to-br from-green-600 via-emerald-500 to-green-700">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-5 left-4 sm:left-6 flex items-center gap-2">
                  <Icon name="book" size={14} sm-size={16} className="text-yellow-300" />
                  <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-white">
                    📚 {total} aulas
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-7">
                <h3 className={`${h3} text-foreground`}>Grade curricular completa</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted">6 trilhas que formam profissionais completos.</p>
                <div className="mt-4 sm:mt-5 space-y-1">
                  {trilhas.map((t: Trilha)=>{
                    const aulas = t.modulos.reduce((s,m)=>s+m.aulas.length,0);
                    return (
                      <Link key={t.id} href={`/trilhas/${t.id}`}
                        className="flex items-center gap-2 sm:gap-3 rounded-xl p-2 sm:p-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-transparent active:scale-[0.99] group/item">
                        <span className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-400/10 text-base sm:text-lg ring-1 ring-green-400/15 group-hover:ring-green-400/30 transition-all">
                          {TRILHA_EMOJI[t.id] ?? "📚"}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs sm:text-sm font-semibold text-foreground/90 truncate">{t.titulo}</span>
                            <span className="text-[10px] sm:text-xs text-muted bg-muted/30 px-1.5 sm:px-2 py-0.5 rounded-full shrink-0">{aulas} aulas</span>
                          </div>
                          <p className="text-[11px] sm:text-xs text-muted truncate mt-0.5">{t.descricao}</p>
                          <div className="mt-1 h-1 rounded-full bg-muted/30 overflow-hidden">
                            <div className="h-full rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 gradient-shift" style={{width:`${Math.round((aulas/total)*100)}%`}} />
                          </div>
                        </div>
                        <Icon name="arrow" size={12} sm-size={14} className="text-muted group-hover/item:translate-x-1 sm:group-hover/item:translate-x-2 transition-transform shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* CARD 3 — Grid Gamificação + Conteúdos */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {/* Gamificação */}
            <FadeUp delay={150}>
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 bg-gradient-to-br from-surface to-muted/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 h-full">
                <div className="relative h-36 sm:h-40 lg:h-44 overflow-hidden bg-gradient-to-br from-green-600 via-emerald-500 to-forest-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {[0,1,2].map(j=>(
                    <div key={j} className="absolute w-2 h-2 rounded-full bg-yellow-300/30 shimmer-particle"
                      style={{left:`${20+j*25}%`,top:`${15+j*20}%`,animationDelay:`${j*1.5}s`}} />
                  ))}
                  <div className="absolute bottom-3 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between">
                    <div>
                      <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-white flex items-center gap-1 w-fit">
                        <Icon name="star" size={10} /> Gamificação
                      </span>
                      <div className="mt-2 sm:mt-3 flex items-center gap-3 sm:gap-4 text-white">
                        <span className="text-2xl sm:text-3xl">🔥</span>
                        <div>
                          <div className="text-base sm:text-lg font-bold leading-none">3 dias</div>
                          <div className="text-[9px] sm:text-[10px] text-white/60 flex items-center gap-1"><Icon name="trending" size={8} sm-size={10} />streak</div>
                        </div>
                        <div className="w-px h-6 sm:h-8 bg-white/20" />
                        <div>
                          <div className="text-base sm:text-lg font-bold leading-none"><ContadorAnimado valor={620} duracao={2000} /></div>
                          <div className="text-[9px] sm:text-[10px] text-white/60 flex items-center gap-1"><Icon name="sparkles" size={8} sm-size={10} />XP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-7">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <Link href="/missoes" className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl bg-gradient-to-b from-green-500/5 to-transparent p-3 sm:p-4 transition-all duration-300 hover:bg-green-500/10 active:scale-95 border border-green-400/10 min-h-[88px] sm:min-h-[100px]">
                      <Icon name="sparkles" size={18} sm-size={22} className="text-green-500" />
                      <span className="text-[10px] sm:text-xs font-semibold text-foreground/80">Quizzes</span>
                      <span className="text-[9px] sm:text-[10px] text-green-500 flex items-center gap-1 font-medium"><Icon name="trending" size={8} sm-size={10} />+10 XP</span>
                    </Link>
                    <Link href="/missoes" className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl bg-gradient-to-b from-orange-500/5 to-transparent p-3 sm:p-4 transition-all duration-300 hover:bg-orange-500/10 active:scale-95 border border-orange-400/10 min-h-[88px] sm:min-h-[100px]">
                      <Icon name="star" size={18} sm-size={22} className="text-orange-500" />
                      <span className="text-[10px] sm:text-xs font-semibold text-foreground/80">Badges</span>
                      <span className="text-[9px] sm:text-[10px] text-muted">8</span>
                    </Link>
                    <Link href="/ranking" className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl bg-gradient-to-b from-yellow-500/5 to-transparent p-3 sm:p-4 transition-all duration-300 hover:bg-yellow-500/10 active:scale-95 border border-yellow-400/10 min-h-[88px] sm:min-h-[100px]">
                      <Icon name="trending" size={18} sm-size={22} className="text-yellow-500" />
                      <span className="text-[10px] sm:text-xs font-semibold text-foreground/80">Ranking</span>
                      <span className="text-[9px] sm:text-[10px] text-muted">Top 3</span>
                    </Link>
                  </div>
                  <div className="mt-4 sm:mt-5">
                    <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted mb-1">
                      <span className="flex items-center gap-1 font-medium"><Icon name="trending" size={10} sm-size={12} />Progresso</span>
                      <span className="font-semibold text-foreground/80">Lv. 3</span>
                    </div>
                    <div className="h-2 sm:h-3 rounded-full bg-muted/40 overflow-hidden p-[1px]">
                      <div className="h-full rounded-full bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 gradient-shift" style={{width:"62%"}} />
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Conteúdos gratuitos */}
            <FadeUp delay={200}>
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 bg-gradient-to-br from-surface to-muted/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 h-full">
                <div className="p-4 sm:p-6 lg:p-7">
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div>
                      <span className="inline-flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-yellow-400 backdrop-blur-sm mb-1.5 sm:mb-2">
                        <Icon name="gift" size={10} /> 100% gratuito
                      </span>
                      <h3 className={`${h3} text-foreground mt-1 sm:mt-2`}>Conteúdos essenciais</h3>
                    </div>
                  </div>
                  <div className="grid gap-2 sm:gap-3">
                    {[
                      { href:"/pressao-arterial", icon:"🩺", title:"Pressão Arterial", img:IMG.pressao },
                      { href:"/diabetes", icon:"🩸", title:"Diabetes", img:IMG.diabetes },
                      { href:"/hormonios", icon:"🧬", title:"Hormônios", img:IMG.hormonios },
                    ].map((item,i)=>(
                      <Link key={item.title} href={item.href}
                        className="group/item flex items-center gap-2 sm:gap-3 rounded-xl border border-border/40 bg-muted/10 p-2.5 sm:p-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-transparent hover:border-green-400/30 active:scale-[0.99]">
                        <div className="relative h-12 w-12 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-lg sm:rounded-xl">
                          <Image src={item.img} alt={`Ilustração sobre ${item.title}`} fill className="object-cover group-hover/item:scale-105 sm:group-hover/item:scale-110 transition-transform duration-500 sm:duration-700" sizes="64px" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <span className="text-sm sm:text-base">{item.icon}</span>
                            <span className="text-xs sm:text-sm font-semibold text-foreground/90">{item.title}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-0.5 text-[10px] sm:text-[11px] text-green-600 dark:text-green-400 font-medium">
                            <Icon name="lock" size={8} sm-size={10} />
                            <span>Abrir gratuito</span>
                            <Icon name="arrow" size={8} sm-size={10} className="group-hover/item:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* ═══ FONTES & SEGURANÇA ═══ */}
      <section className="relative overflow-hidden bg-surface/50 border-y border-border/40 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <ScrollReveal direction="up" delay={0}>
              <div className="rounded-2xl border border-green-400/20 bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-950/20 p-5 sm:p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
                    <Icon name="shield" size={16} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-300">Informação segura</span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Todo conteúdo é baseado em fontes oficiais: ANVISA, OMS, Ministério da Saúde, PubMed, SciELO e Cochrane Library. Nenhuma informação é inventada ou fabricada.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={80}>
              <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-50/50 to-transparent dark:from-amber-950/20 p-5 sm:p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <Icon name="heart" size={16} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">Saúde não é jogo</span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  ⚠️ Para diagnósticos, consulte um <strong>médico</strong>. Para orientação sobre medicamentos, consulte o <strong>farmacêutico</strong>. Nosso papel é educar, não substituir profissionais.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={160}>
              <div className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-950/20 p-5 sm:p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Icon name="book" size={16} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">Referências globais</span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Citamos OMS (Genebra), FDA (EUA), EMA (Europa), ANVISA (Brasil), Ministério da Saúde, Cochrane (Reino Unido) e artigos revisados por pares do PubMed/SciELO.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section id="ser-aluno" className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-forest-900 py-16 sm:py-24">
        <SectionVideo {...SECTION_VIDEOS.cta} />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/5 blur-[150px]" />
        <div className="pointer-events-none absolute right-[10%] top-[20%] h-[40vmax] w-[40vmax] rounded-full bg-yellow-400/5 blur-[120px] blob-morph" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-8 sm:gap-12 md:grid-cols-2">
            <ScrollReveal direction="up" sm-direction="left">
              <div>
                <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-yellow-300 backdrop-blur-sm ripple">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]" />
                  <Icon name="gift" size={10} /> Tudo gratuito
                </div>
                <h2 className={`${h2} text-white`}>
                  Sua jornada começa{" "}
                  <span className="bg-gradient-to-r from-green-300 via-green-400 to-emerald-200 bg-clip-text text-transparent gradient-shift">agora</span>
                </h2>
                <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base leading-relaxed text-white/60">
                  Acesso imediato a todas as {total} aulas, 6 trilhas, simuladores e certificado.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  {[
                    { icon:"smile" as IconName, text:"6 trilhas — do básico ao avançado" },
                    { icon:"zap" as IconName, text:`${total}+ aulas com vídeos e simuladores` },
                    { icon:"star" as IconName, text:"XP, badges, ranking e missões" },
                    { icon:"check" as IconName, text:"Certificado ao finalizar" },
                  ].map((b,i)=>(
                    <ScrollReveal key={b.text} direction="up" delay={i*60}>
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-white/5 ring-1 ring-white/10">
                          <Icon name={b.icon} size={14} sm-size={18} className="text-green-400" />
                        </span>
                        <span className="text-xs sm:text-sm text-white/70">{b.text}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" sm-direction="right" delay={150}>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 sm:p-6 lg:p-8 backdrop-blur-md shadow-2xl shadow-green-500/5">
                <div className="text-center mb-4 sm:mb-6">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-500/20 border border-green-400/30 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-green-300 mb-2 sm:mb-3 pulse-glow">
                    <Icon name="smile" size={10} /> Matrícula gratuita
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">Torne-se Aluno</h3>
                  <p className="text-[11px] sm:text-xs text-white/40 mt-1">Preencha e comece hoje</p>
                </div>
                <MatriculaForm />
                <p className="mt-3 text-center text-[10px] sm:text-[11px] text-white/30">Confirmação por e-mail em até 24h.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="relative overflow-hidden border-t border-green-800/30 bg-green-950 py-8 sm:py-10">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/20">
                <Icon name="heart" size={14} sm-size={16} />
              </span>
              <span className="text-xs sm:text-sm font-bold text-white/80">Atendentes de Farmácia</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-1 text-[11px] sm:text-xs text-white/40">
              <Link href="/trilhas" className="hover:text-green-400 transition-colors">Trilhas</Link>
              <Link href="/sobre" className="hover:text-green-400 transition-colors">Sobre</Link>
              <Link href="/termos" className="hover:text-green-400 transition-colors">Termos</Link>
              <Link href="#ser-aluno" className="hover:text-green-400 transition-colors">Matrícula</Link>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 border-t border-green-800/20 pt-4 sm:pt-5 text-center space-y-1">
            <p className="text-[10px] sm:text-xs text-white/30">Conteúdo educativo com referências em ANVISA, OMS, Ministério da Saúde e literatura científica.</p>
            <p className="text-[10px] sm:text-xs text-white/20">⚠️ Este conteúdo não substitui consulta médica ou orientação farmacêutica.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
