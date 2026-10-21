# SaúdeGPT — ecossistema de aprendizado

Identidade preservada: `tpiola/saudegpt`, branch de produção `main`, Vercel `saudegpt`, projeto `prj_jYEaE993EZm4ex5Zmf9XmcgD57WA`, equipe `team_X4bKucsxm1xNovRCzLleI3JC`, domínios `saudegpt.com` e `www.saudegpt.com`.

## Experiência

Página inicial com identidade própria em verde, creme e laranja; fotos locais; catálogo pesquisável; trilhas, módulos e exercícios conectados. Preservados currículo anterior, progresso do aluno e integrações. Incluída a trilha `cuidado-no-balcao`: 4 módulos, 12 aulas e 12 cenários interativos em `/praticar`. A plataforma reúne 12 trilhas, 100 módulos e 237 aulas.

O crédito profissional aparece no rodapé compartilhado. CTAs de matrícula substituídos por iniciar. Removidas promessas de certificado nas páginas de divulgação revisadas. Os nomes internos de IDs e registros de alunos foram preservados para compatibilidade.

Em toda receita, Apoio ao Tratamento conforme protocolo da unidade. Em todo uso contínuo, apresentar o Na Rotina e ajudar a aderir somente com consentimento e conforme elegibilidade e regras vigentes. Não se presumem cadastro obrigatório, benefícios fixos ou alteração de prescrição. Avaliação e orientações clínicas encaminhadas ao farmacêutico.

## Mídia

237 mapas de estudo SVG distintos, derivados do conteúdo real de cada aula; geração reproduzível com `node scripts/generate-learning-visuals.cjs`. Aulas sem vídeo validado não exibem player, selo de vídeo ou carregamento fictício. Narrações genéricas não são apresentadas como narração específica de aulas distintas. Fotografias de produtos sem correspondência com a categoria não são mostradas nas aulas. Corrigidas repetições dentro das páginas de diabetes, hormônios, curiosidades e pressão arterial. Assets antigos não utilizados preservados para compatibilidade.

## Verificação

`npm run typecheck`, `npm run lint`, `npm run build`.

`node scripts/audit-ecosystem.cjs` verifica rotas estáticas e curriculares, imagens e chunks locais renderizados, crédito fora do rodapé, CTAs de matrícula, unicidade de ilustrações e integridade de opções de quiz. Configure `AUDIT_BASE_URL` para o servidor em teste. A publicação deve manter o mesmo projeto e domínio.

Práticas guardam progresso no navegador (`saudegpt-pratica-balcao-v1`), sem dados de clientes. O progresso desses exercícios não é sincronizado entre dispositivos. A conclusão de aula com quiz exige a nota mínima já indicada pela plataforma e oferece nova tentativa.

A verificação técnica não representa auditoria clínica exaustiva das 225 aulas anteriores. As referências oficiais dão apoio à consulta e não substituem avaliação individual ou protocolos atualizados.

Resultado técnico final antes da publicação: TypeScript e lint sem erros; build de 512 páginas; auditoria HTTP de 495 rotas, 281 recursos locais renderizados, 707 questões com índice de resposta válido, 237 ilustrações distintas. Zero falhas HTTP, zero recursos locais com falha, zero imagens repetidas na mesma página e zero crédito profissional fora do rodapé nas páginas auditadas. O navegador conferiu a composição desktop; a interatividade do preview ficou limitada pelo ambiente e deve ser retestada na publicação.
