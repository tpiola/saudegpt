'use client'


import { useState } from 'react'


const SECTIONS = {
  sobre: [
    {
      icon: '📋',
      title: 'Avaliação Psicológica',
      desc: 'Domine testes psicológicos, entrevistas clínicas, observação comportamental e elaboração de laudos com rigor ético e técnico.',
    },
    {
      icon: '💬',
      title: 'Psicoterapias',
      desc: 'Explore as principais abordagens: TCC, psicanálise, humanista e gestalt. Aprenda a aplicar técnicas baseadas em evidências.',
    },
    {
      icon: '🧠',
      title: 'Neuropsicologia',
      desc: 'Estude funções cognitivas, avaliação neuropsicológica, reabilitação cognitiva e a relação entre cérebro e comportamento.',
    },
  ],
  modulos: [
    {
      num: '01',
      title: 'Fundamentos da Psicologia',
      items: ['História e evolução da Psicologia', 'Principais teorias psicológicas', 'Ética profissional e CRP', 'Bases biológicas do comportamento'],
    },
    {
      num: '02',
      title: 'Avaliação Psicológica',
      items: ['Testes psicológicos e psicométricos', 'Entrevista clínica e anamnese', 'Observação e análise comportamental', 'Elaboração de laudos e pareceres'],
    },
    {
      num: '03',
      title: 'Psicoterapias',
      items: ['Terapia Cognitivo-Comportamental (TCC)', 'Psicanálise e abordagem psicodinâmica', 'Abordagem humanista e gestalt', 'Intervenções baseadas em evidências'],
    },
    {
      num: '04',
      title: 'Neuropsicologia',
      items: ['Funções cognitivas: memória, atenção, linguagem', 'Avaliação neuropsicológica', 'Reabilitação cognitiva', 'Neurociência aplicada à clínica'],
    },
    {
      num: '05',
      title: 'Psicologia Clínica e Hospitalar',
      items: ['Atuação em contextos clínicos', 'Psicologia hospitalar e saúde', 'Psicodiagnóstico e intervenção', 'Trabalho interdisciplinar em saúde'],
    },
    {
      num: '06',
      title: 'Psicologia Organizacional e do Trabalho',
      items: ['Recrutamento e seleção', 'Treinamento e desenvolvimento', 'Qualidade de vida no trabalho', 'Liderança e gestão de equipes'],
    },
  ],
  diferenciais: [
    {
      icon: '🏛️',
      title: 'Preparatório CRP',
      desc: 'Conteúdo alinhado ao Conselho Regional de Psicologia. Prepare-se para a prova do CRP com materiais exclusivos.',
    },
    {
      icon: '🎓',
      title: 'Certificado Reconhecido',
      desc: 'Ao finalizar, receba um certificado de conclusão válido em todo o território nacional com carga horária detalhada.',
    },
    {
      icon: '🤖',
      title: 'Suporte com IA',
      desc: 'Tire dúvidas 24/7 com nossa inteligência artificial. Revisões, resumos e explicações personalizados por IA.',
    },
    {
      icon: '📚',
      title: 'Metodologia Ativa',
      desc: 'Aulas práticas, estudos de caso, simulações de atendimento e material complementar em PDF, vídeo e áudio.',
    },
  ],
}


export default function Home() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (nome && email) {
      setEnviado(true)
    }
  }


  return (
    <main className="bg-animated" style={{
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />


      {/* ========== HERO ========== */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="glass" style={{
          padding: '3rem 2rem',
          borderRadius: '1.5rem',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
        }}>
          {/* Brain icon */}
          <div style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.05))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            margin: '0 auto 1.25rem',
            border: '1px solid rgba(168, 85, 247, 0.15)',
          }}>
            🧠
          </div>


          {/* Badge */}
          <div style={{ marginBottom: '1rem' }}>
            <span className="badge">🏛️ CRP — Curso Preparatório</span>
          </div>


          {/* Title */}
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 800,
            marginBottom: '0.75rem',
            lineHeight: 1.2,
          }}>
            <span className="text-gradient">SaúdeGPT</span>{' '}
            <span style={{ color: 'var(--text)' }}>Psicologia</span>
          </h1>


          {/* Subtitle */}
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
            maxWidth: '460px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            O curso completo de Psicologia com suporte de inteligência artificial. 
            Domine avaliação psicológica, psicoterapias, neuropsicologia e prepare-se 
            para o CRP com excelência.
          </p>


          {/* Tags */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}>
            <span style={{
              background: 'rgba(168, 85, 247, 0.08)',
              border: '1px solid rgba(168, 85, 247, 0.15)',
              borderRadius: 20,
              padding: '4px 14px',
              fontSize: '0.8rem',
              color: 'var(--accent-light)',
              fontWeight: 600,
            }}>📖 6 Módulos</span>
            <span style={{
              background: 'rgba(212, 168, 67, 0.08)',
              border: '1px solid rgba(212, 168, 67, 0.15)',
              borderRadius: 20,
              padding: '4px 14px',
              fontSize: '0.8rem',
              color: 'var(--gold-light)',
              fontWeight: 600,
            }}>🎯 CRP</span>
            <span style={{
              background: 'rgba(168, 85, 247, 0.08)',
              border: '1px solid rgba(168, 85, 247, 0.15)',
              borderRadius: 20,
              padding: '4px 14px',
              fontSize: '0.8rem',
              color: 'var(--accent-light)',
              fontWeight: 600,
            }}>🤖 Com IA</span>
          </div>


          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            alignItems: 'center',
          }}>
            <a href="#cadastro" className="btn-purple" style={{ width: '100%', maxWidth: 360, justifyContent: 'center', fontSize: '1.05rem', padding: '16px 32px' }}>
              Quero me inscrever 🚀
            </a>
            <a href="#programa" style={{
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: 500,
              borderBottom: '1px solid rgba(128, 160, 152, 0.3)',
              paddingBottom: 2,
              transition: 'color 0.3s',
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Ver conteúdo programático ↓
            </a>
          </div>
        </div>


        {/* Scroll hint */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div style={{
            width: 24,
            height: 40,
            border: '2px solid rgba(128, 160, 152, 0.3)',
            borderRadius: 12,
            margin: '0 auto',
            position: 'relative',
          }}>
            <div style={{
              width: 4,
              height: 10,
              background: 'var(--accent)',
              borderRadius: 2,
              position: 'absolute',
              top: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'bounceDown 2s ease-in-out infinite',
            }} />
          </div>
        </div>
      </section>


      {/* ========== SOBRE O CURSO ========== */}
      <section id="sobre" className="section" style={{
        position: 'relative',
        zIndex: 1,
      }}>
        <h2 className="section-title">
          Sobre o <span className="text-gradient">Curso</span>
        </h2>
        <p className="section-subtitle">
          Uma formação completa em Psicologia com foco em prática clínica, 
          avaliação psicológica e preparação para o CRP. Conteúdo atualizado 
          e suporte de inteligência artificial.
        </p>


        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: 1000,
          margin: '0 auto',
        }}>
          {SECTIONS.sobre.map((item, idx) => (
            <div key={idx} className="card-purple" style={{ padding: '2rem 1.5rem' }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                width: 56,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 14,
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(168, 85, 247, 0.04))',
                border: '1px solid rgba(168, 85, 247, 0.1)',
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                marginBottom: '0.75rem',
                color: 'var(--text)',
              }}>
                {item.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* Divider */}
      <div className="divider-gradient" style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }} />


      {/* ========== CONTEÚDO PROGRAMÁTICO ========== */}
      <section id="programa" className="section" style={{
        position: 'relative',
        zIndex: 1,
      }}>
        <h2 className="section-title">
          Conteúdo <span className="text-gradient">Programático</span>
        </h2>
        <p className="section-subtitle">
          6 módulos completos do básico ao avançado. Aprenda de forma estruturada 
          com material didático, exercícios e suporte de IA.
        </p>


        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          {SECTIONS.modulos.map((modulo, idx) => (
            <div key={idx} className="module-item">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span className="module-number">{modulo.num}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text)',
                  }}>
                    Módulo {modulo.num}: {modulo.title}
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}>
                    {modulo.items.map((item, i) => (
                      <li key={i} style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        padding: '3px 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}>
                        <span style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Divider */}
      <div className="divider-gradient" style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }} />


      {/* ========== DIFERENCIAIS ========== */}
      <section id="diferenciais" className="section" style={{
        position: 'relative',
        zIndex: 1,
      }}>
        <h2 className="section-title">
          Nossos <span className="text-gradient">Diferenciais</span>
        </h2>
        <p className="section-subtitle">
          Por que escolher o SaúdeGPT Psicologia? Oferecemos uma experiência 
          completa de aprendizado com suporte tecnológico de ponta.
        </p>


        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          maxWidth: 1000,
          margin: '0 auto',
        }}>
          {SECTIONS.diferenciais.map((item, idx) => (
            <div key={idx} className="card-purple" style={{ padding: '1.75rem 1.5rem', textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                width: 56,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 14,
                background: 'linear-gradient(135deg, rgba(212, 168, 67, 0.12), rgba(212, 168, 67, 0.04))',
                border: '1px solid rgba(212, 168, 67, 0.1)',
                margin: '0 auto 1rem',
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                color: 'var(--text)',
              }}>
                {item.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                lineHeight: 1.7,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* ========== CTA FINAL / CADASTRO ========== */}
      <section id="cadastro" style={{
        padding: '5rem 1rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="glass" style={{
          padding: '3rem 2rem',
          borderRadius: '1.5rem',
          maxWidth: '560px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: '3rem',
            marginBottom: '1rem',
          }}>
            🧠
          </div>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            marginBottom: '0.75rem',
          }}>
            Comece sua jornada na{' '}
            <span className="text-gradient">Psicologia</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
            maxWidth: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Inscreva-se agora e tenha acesso ao curso completo com suporte de IA, 
            material didático e certificado de conclusão.
          </p>


          {enviado ? (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'rgba(168, 85, 247, 0.06)',
              borderRadius: 16,
              border: '1px solid rgba(168, 85, 247, 0.15)',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✅</div>
              <p style={{ color: 'var(--accent-light)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                Inscrição recebida!
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                Entraremos em contato em breve com as informações do curso de Psicologia.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="input-glass"
                  required
                />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-glass"
                  required
                />
                <button type="submit" className="btn-purple" style={{ width: '100%', justifyContent: 'center', padding: '16px 32px' }}>
                  Quero me inscrever 🚀
                </button>
              </div>
              <p style={{
                color: 'rgba(128, 160, 152, 0.6)',
                fontSize: '0.75rem',
                marginTop: '1rem',
              }}>
                Ao se inscrever, você aceita receber comunicações do SaúdeGPT.
              </p>
            </form>
          )}
        </div>
      </section>


      {/* ========== FOOTER ========== */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem 1rem',
        borderTop: '1px solid rgba(168, 85, 247, 0.08)',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>
            <span className="text-gradient">SaúdeGPT</span>{' '}
            <span style={{ color: 'var(--text)' }}>Psicologia</span>
          </span>
        </div>
        <p style={{
          color: 'rgba(128, 160, 152, 0.5)',
          fontSize: '0.8rem',
        }}>
          © {new Date().getFullYear()} SaúdeGPT Psicologia — Todos os direitos reservados
        </p>
      </footer>


      {/* CSS animation for scroll hint */}
      <style>{`
        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
          50% { transform: translateX(-50%) translateY(8px); opacity: 0.4; }
        }
      `}</style>
    </main>
  )
}
