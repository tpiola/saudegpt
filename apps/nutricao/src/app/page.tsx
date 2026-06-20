'use client'


import { useState, useEffect, useCallback } from 'react'


const TYPING_SPEED = 60
const DELETING_SPEED = 35
const PAUSE_AFTER_TYPING = 2500
const PAUSE_AFTER_DELETING = 1000


const phrases = [
  'Nutrição Clínica com IA',
  'Preparatório para o CRN',
  'Avaliação Nutricional',
  'Dietoterapia Avançada',
]


const modules = [
  {
    number: '01',
    title: 'Fundamentos da Nutrição',
    items: [
      'Macronutrientes: carboidratos, proteínas e lipídios',
      'Micronutrientes: vitaminas e minerais essenciais',
      'Fisiologia da digestão e absorção de nutrientes',
      'Metabolismo energético e balanço nitrogenado',
    ],
  },
  {
    number: '02',
    title: 'Avaliação Nutricional',
    items: [
      'Antropometria: medidas, índices e indicadores',
      'Anamnese nutricional e inquéritos alimentares',
      'Exames bioquímicos e marcadores nutricionais',
      'Diagnóstico nutricional e classificação de risco',
    ],
  },
  {
    number: '03',
    title: 'Dietoterapia nas Doenças Crônicas',
    items: [
      'Diabetes Mellitus: conduta dietoterápica',
      'Hipertensão Arterial Sistêmica e sódio',
      'Dislipidemias: abordagem nutricional',
      'Doença Renal Crônica e terapia nutricional',
    ],
  },
  {
    number: '04',
    title: 'Nutrição Esportiva',
    items: [
      'Periodização nutricional para modalidades',
      'Suplementação esportiva: evidências e condutas',
      'Hidratação e reposição de eletrólitos',
      'Estratégias para ganho de massa e redução de gordura',
    ],
  },
  {
    number: '05',
    title: 'Nutrição Clínica Hospitalar',
    items: [
      'Terapia Nutricional Enteral: indicações e fórmulas',
      'Terapia Nutricional Parenteral: acesso e monitoramento',
      'Triagem nutricional hospitalar (NRS-2002, MUST)',
      'Cuidados paliativos e suporte nutricional',
    ],
  },
  {
    number: '06',
    title: 'Saúde Pública e Segurança Alimentar',
    items: [
      'Política Nacional de Alimentação e Nutrição (PNAN)',
      'Guias Alimentares para a População Brasileira',
      'Vigilância Alimentar e Nutricional (SISVAN)',
      'Educação alimentar e nutricional na atenção básica',
    ],
  },
]


const diferenciais = [
  {
    icon: '📜',
    title: 'Preparatório CRN',
    desc: 'Conteúdo alinhado ao edital do Conselho Regional de Nutrição',
  },
  {
    icon: '🎓',
    title: 'Certificado Reconhecido',
    desc: 'Certificado de conclusão com carga horária válida em todo território nacional',
  },
  {
    icon: '💬',
    title: 'Suporte com IA',
    desc: 'Tire dúvidas em tempo real com assistente inteligente especializado',
  },
  {
    icon: '🧠',
    title: 'Metodologia Ativa',
    desc: 'Aprendizagem baseada em casos clínicos reais e simulações práticas',
  },
]


export default function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')


  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]


    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
        } else {
          setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentPhrase.slice(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)
        } else {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED)


    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])


  return (
    <main className="bg-animated" style={{
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* ORBS */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />


      {/* ========== HERO ========== */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1.5rem 3rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="animate-float" style={{
          width: 88,
          height: 88,
          borderRadius: 24,
          background: 'linear-gradient(135deg, #00C9A7, #66E3CC)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          boxShadow: '0 8px 32px rgba(0, 201, 167, 0.25)',
        }}>
          🥬
        </div>


        <div className="badge" style={{ marginBottom: '1.25rem' }}>
          <span>📜</span>
          <span>Preparatório CRN — 2025</span>
        </div>


        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: 800,
          textAlign: 'center',
          lineHeight: 1.15,
          maxWidth: 720,
          marginBottom: '1rem',
        }}>
          <span className="text-gradient-emerald">SaúdeGPT</span>{' '}
          <span style={{ color: '#EDF0EC' }}>Nutrição</span>
        </h1>


        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#80A098',
          textAlign: 'center',
          minHeight: '2.4rem',
          marginBottom: '2rem',
        }}>
          <span>{displayText}</span>
          <span className="typewriter-cursor" style={{
            color: '#00C9A7',
            fontWeight: 200,
            marginLeft: 2,
          }}>|</span>
        </p>


        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#conteudo" className="btn-primary">
            📚 Acessar conteúdo
          </a>
          <a href="#cta-final" className="btn-outline">
            💊 Quero me inscrever
          </a>
        </div>


        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          marginTop: '3.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {[
            { value: '6', label: 'Módulos' },
            { value: '24+', label: 'Aulas' },
            { value: 'CRN', label: 'Preparatório' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                color: '#00C9A7',
                lineHeight: 1.2,
              }}>{stat.value}</div>
              <div style={{ fontSize: '0.8rem', color: '#5A7A70', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>


      {/* ========== SOBRE O CURSO ========== */}
      <section style={{
        padding: '4rem 1.5rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: '#EDF0EC',
              marginBottom: '0.75rem',
            }}>
              Sobre o{' '}
              <span className="text-gradient-emerald">Curso</span>
            </h2>
            <p style={{ color: '#80A098', fontSize: '0.95rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Uma jornada completa de Nutrição Clínica combinando conhecimento científico com inteligência artificial para potencializar seu aprendizado.
            </p>
          </div>


          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              {
                icon: '📏',
                title: 'Avaliação Nutricional',
                desc: 'Domine técnicas antropométricas, exames bioquímicos e diagnóstico nutricional completo.',
              },
              {
                icon: '🍎',
                title: 'Dietoterapia',
                desc: 'Aprenda a prescrever dietas para doenças crônicas com base nas melhores evidências.',
              },
              {
                icon: '🏃',
                title: 'Nutrição Esportiva',
                desc: 'Estratégias de periodização, suplementação e hidratação para atletas e praticantes.',
              },
            ].map((card) => (
              <div key={card.title} className="card-glass" style={{
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '1rem',
              }}>
                <div className="icon-wrapper" style={{ fontSize: '1.8rem' }}>{card.icon}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#EDF0EC' }}>{card.title}</h3>
                <p style={{ color: '#80A098', fontSize: '0.88rem', lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========== CONTEÚDO PROGRAMÁTICO ========== */}
      <section id="conteudo" style={{
        padding: '4rem 1.5rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: '#EDF0EC',
              marginBottom: '0.75rem',
            }}>
              Conteúdo{' '}
              <span className="text-gradient-emerald">Programático</span>
            </h2>
            <p style={{ color: '#80A098', fontSize: '0.95rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              6 módulos completos para formar um nutricionista preparado para os desafios da clínica e do CRN.
            </p>
          </div>


          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {modules.map((mod) => (
              <div key={mod.number} className="section-glass" style={{
                padding: '1.75rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: '#00C9A7',
                    background: 'rgba(0, 201, 167, 0.1)',
                    borderRadius: 8,
                    padding: '2px 10px',
                  }}>
                    M{mod.number}
                  </span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#EDF0EC' }}>{mod.title}</h3>
                </div>
                <div className="divider-gradient" style={{ marginBottom: '0.75rem' }} />
                {mod.items.map((item, i) => (
                  <div key={i} className="module-item">{item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========== DIFERENCIAIS ========== */}
      <section style={{
        padding: '4rem 1.5rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: '#EDF0EC',
              marginBottom: '0.75rem',
            }}>
              Nossos{' '}
              <span className="text-gradient-gold">Diferenciais</span>
            </h2>
          </div>


          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}>
            {diferenciais.map((dif) => (
              <div key={dif.title} className="card-glass" style={{
                padding: '2rem 1.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: 'rgba(212, 168, 67, 0.08)',
                  border: '1px solid rgba(212, 168, 67, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                }}>
                  {dif.icon}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#EDF0EC' }}>{dif.title}</h3>
                <p style={{ color: '#80A098', fontSize: '0.85rem', lineHeight: 1.7 }}>{dif.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========== CTA FINAL ========== */}
      <section id="cta-final" style={{
        padding: '5rem 1.5rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container-narrow">
          <div className="section-glass" style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #0A1A17, #0D2A20)',
            border: '1px solid rgba(0, 201, 167, 0.15)',
          }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: 'linear-gradient(135deg, #00C9A7, #66E3CC)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 1.5rem',
              boxShadow: '0 8px 32px rgba(0, 201, 167, 0.25)',
            }}>
              🚀
            </div>


            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
              fontWeight: 700,
              color: '#EDF0EC',
              marginBottom: '0.75rem',
            }}>
              Pronto para começar sua jornada?
            </h2>
            <p style={{
              color: '#80A098',
              fontSize: '0.95rem',
              maxWidth: 480,
              margin: '0 auto 2rem',
              lineHeight: 1.7,
            }}>
            Transforme sua carreira na nutrição com o curso mais completo, apoiado por inteligência artificial e conteúdo atualizado.
            </p>


            <a
              href="https://saudegpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '1.05rem', padding: '16px 40px' }}
            >
              🥬 Acessar SaúdeGPT.com
            </a>
          </div>
        </div>
      </section>


      {/* ========== FOOTER ========== */}
      <footer style={{
        padding: '2rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="divider-gradient" style={{ marginBottom: '1.5rem', maxWidth: 300, margin: '0 auto 1.5rem' }} />
        <p style={{ color: '#5A7A70', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} SaúdeGPT Nutrição — Todos os direitos reservados
        </p>
      </footer>
    </main>
  )
}
