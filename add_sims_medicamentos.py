import re

with open("src/content/trilha-medicamentos.ts") as f:
    content = f.read()

sims = {}

sims["conceitos"] = '''        simulacao: {
          cliente: "Cliente pergunta se cha de boldo e remedio de farmacia sao a mesma coisa.",
          falaBoa: "Medicamento e produto registrado na Anvisa com dose padronizada. Remedio caseiro nao tem controle de dose. Para sintomas especificos o medicamento e mais seguro.",
          falaEvitar: "Tudo e igual compra o mais barato.",
        },'''

sims["principio-ativo"] = '''        simulacao: {
          cliente: "Cliente com alergia a lactose quer saber se o generico tem lactose.",
          falaBoa: "Vamos olhar a bula na secao de composicao. Se tiver lactose aparece aqui. Posso chamar o farmaceutico para a melhor alternativa.",
          falaEvitar: "Nao tem nada disso pode comprar.",
        },'''

sims["formas-farmaceuticas"] = '''        simulacao: {
          cliente: "Idosa com dificuldade para engolir comprimidos.",
          falaBoa: "Alguns medicamentos tem versao liquida ou orodispersivel. Nao recomendo quebrar sem verificar. Vou chamar o farmaceutico.",
          falaEvitar: "Pode quebrar no meio que da no mesmo.",
        },'''

sims["tarjas"] = '''        simulacao: {
          cliente: "Traz receita tarja vermelha vencida para comprar so mais uma caixa.",
          falaBoa: "Receita vencida nao posso dispensar por seguranca. Sugiro ligar pro consultorio medico para renovar.",
          falaEvitar: "Receita vencida nao vale fazer o que.",
        },'''

sims["genericos"] = '''        simulacao: {
          cliente: "Desconfiado de generico acha que e mais fraco que o de marca.",
          falaBoa: "Generico tem o mesmo principio ativo na mesma dose. Passa por testes de bioequivalencia. Aprovado pela Anvisa. Diferenca e o preco.",
          falaEvitar: "E tudo igual marca e caro por causa de propaganda.",
        },'''

sims["analgesicos-antitermicos"] = '''        simulacao: {
          cliente: "Jovem com dor de cabeca e febre 38C ha 1 dia. Estomago vazio.",
          falaBoa: "Dipirona ou paracetamol sao melhores de estomago vazio que ibuprofeno que pode irritar. Se febre passar de 3 dias busque avaliacao medica.",
          falaEvitar: "Toma ibuprofeno que resolve jejum nao faz mal.",
        },'''

sims["anti-inflamatorios-miorrelaxantes"] = '''        simulacao: {
          cliente: "Senhor com dor nas costas ha 2 dias. Tem pressao alta controlada.",
          falaBoa: "Anti-inflamatorios podem interferir com medicacao de pressao. Vou chamar o farmaceutico para a combinacao mais segura.",
          falaEvitar: "Toma esse anti-inflamatorio forte que passa.",
        },'''

sims["gripe-alergia-tosse"] = '''        simulacao: {
          cliente: "Mae com filho de 4 anos tossindo muito a noite.",
          falaBoa: "Se tosse seca com espirros pode ser alergia. Se tem secrecao ou febre e resfriado. Criancas pequenas leve ao pediatra se nao melhorar.",
          falaEvitar: "Compra xarope que para tosse na hora.",
        },'''

sims["gastrointestinais"] = '''        simulacao: {
          cliente: "Moca com azia frequente toda semana.",
          falaBoa: "Azia semanal merece investigacao. Antiacido alivia mas pode mascarar refluxo. Sugiro conversar com o farmaceutico.",
          falaEvitar: "Toma inibidor de bomba que e mais forte.",
        },'''

sims["antimicoticos-vitaminas"] = '''        simulacao: {
          cliente: "Senhora com unha amarelada e grossa.",
          falaBoa: "Pode ser micose mas o diagnostico ideal e do farmaceutico ou dermatologista. Tratamento e longo meses.",
          falaEvitar: "Passa esmalte antimicotico que some em 2 semanas.",
        },'''

sims["antissepticos-topicos"] = '''        simulacao: {
          cliente: "Mae com filho que caiu e ralou o joelho.",
          falaBoa: "Lavar com agua e sabao neutro primeiro. Depois clorexidina aquosa. Alcool 70 nao e indicado para ferida aberta.",
          falaEvitar: "Passa alcool que arde mas limpa.",
        },'''

sims["pediculicidas-escabicidas-foco"] = '''        simulacao: {
          cliente: "Mae filho voltou da escola com piolho. Volta depois de uma semana.",
          falaBoa: "Lozao pediculicida mata piolhos mas ovos podem sobreviver. Repetir apos 7 dias. Pente fino. Lavar roupas em agua quente.",
          falaEvitar: "Passa inseticida de barata.",
        },'''

sims["antibioticos"] = '''        simulacao: {
          cliente: "Quer comprar amoxicilina para dor de garganta. Nao tem receita.",
          falaBoa: "Antibiotico sem receita e proibido por lei. Dor de garganta pode ser viral. Precisa de avaliacao medica.",
          falaEvitar: "Nao vendo sem receita.",
        },'''

sims["receituarios"] = '''        simulacao: {
          cliente: "Traz receita de controlado tarja preta confusa.",
          falaBoa: "Precisa ter nome paciente medicamento dose posologia data carimbo e assinatura. Se faltar nao posso dispensar.",
          falaEvitar: "Receita errada nao posso fazer nada.",
        },'''

sims["glp1"] = '''        simulacao: {
          cliente: "Pessoa com diabetes recebeu a caneta nova. Nao sabe aplicar.",
          falaBoa: "Caneta subcutanea 1x por semana. Guardar na geladeira. Aplicar na barriga coxa ou braco. Quer demonstracao?",
          falaEvitar: "So ler a bula.",
        },'''

sims["farmacia-popular"] = '''        simulacao: {
          cliente: "Idoso nao consegue mais comprar remedio pelo programa.",
          falaBoa: "Farmacia Popular cobre alguns medicamentos. Vou verificar o CPF. Sugiro conversar com o medico sobre alternativas.",
          falaEvitar: "Programa mudou paga do bolso.",
        },'''

sims["injetaveis"] = '''        simulacao: {
          cliente: "Comprou injecao de vitamina B12 para aplicar em casa.",
          falaBoa: "Injecao intramuscular exige tecnica. Agulha esteril e descarte seguro. O ideal e profissional de saude.",
          falaEvitar: "E facil so espetar no braco.",
        },'''

sims["adesao"] = '''        simulacao: {
          cliente: "Hipertenso que so toma remedio quando sente a pressao subir.",
          falaBoa: "Remedio de pressao age 24h preventivamente. So tomar com sintomas e risco. Sugiro caixinha organizadora e rotina.",
          falaEvitar: "Tem que tomar todo dia senao sobe.",
        },'''

sims["encaminhamento"] = '''        simulacao: {
          cliente: "Tosse persistente ha mais de 3 semanas.",
          falaBoa: "Tosse por 3 semanas merece investigacao. Pode ser alergia refluxo ou asma. Vou chamar o farmaceutico.",
          falaEvitar: "Tosse demora compra outro xarope.",
        },'''

for aid, sim in sims.items():
    marker = f'id: "{aid}"'
    pos = content.find(marker)
    if pos == -1:
        pos = content.find(f"id: '{aid}'")
    if pos == -1:
        print(f"NOT FOUND: {aid}")
        continue
    
    after = content[pos:pos+1500]
    qpos = after.find("\n        quiz: [")
    if qpos == -1:
        qpos = after.find("\n          quiz: [")
    if qpos == -1:
        qpos = after.find("        quiz: [")
    if qpos == -1:
        qpos = after.find("          quiz: [")
    if qpos == -1:
        qpos = after.find("\n      quiz: [")
    if qpos == -1:
        print(f"NO QUIZ: {aid}")
        continue
    
    between = after[:qpos]
    if 'simulacao:' in between:
        print(f"SKIP (has sim): {aid}")
        continue
    
    actual_pos = pos + qpos
    content = content[:actual_pos] + '\n' + sim + content[actual_pos:]
    print(f"OK: {aid}")

with open("src/content/trilha-medicamentos.ts", "w") as f:
    f.write(content)
print("Done!")
