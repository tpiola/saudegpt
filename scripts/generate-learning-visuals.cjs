// Unique, deterministic study diagrams from the actual curriculum. No remote assets.
const fs = require('fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, file) => module._compile(ts.transpile(fs.readFileSync(file, 'utf8'), {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020}), file);
const {trilhas} = require('../src/content/curriculo.ts');
const escape = s => s.replace(/[<>&"']/g, c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
const wrap = (s, n) => { const lines=[]; for(const w of s.split(/\s+/)){ if(!lines.length || lines[lines.length-1].length+w.length+1>n)lines.push(w);else lines[lines.length-1]+=' '+w;} return lines; };
const textLines = (s,x,y,n,size,color,max=4) => wrap(s,n).slice(0,max).map((line,i)=>`<text x="${x}" y="${y+i*(size*1.4)}" font-size="${size}" fill="${color}">${escape(line)}</text>`).join('');
fs.mkdirSync('public/ilustracoes',{recursive:true});
for(const t of trilhas)for(const m of t.modulos)for(const a of m.aulas){
 const points=[a.resumoExecutivo[0]||a.resumo,a.checklist[0]||'Confirme a necessidade.',a.quandoChamarFarmaceutico[0]||'Converse com o farmacêutico.'];
 const labels=['ENTENDER','APLICAR','PEDIR APOIO'];
 const panels=points.map((p,i)=>{const x=40+i*400; return `<rect x="${x}" y="215" width="380" height="345" rx="20" fill="${i===2?'#123e36':'#ffffff'}"/><circle cx="${x+38}" cy="258" r="18" fill="${i===2?'#dce9c5':'#e8efe1'}"/><text x="${x+33}" y="264" font-size="16" fill="#123e36">${i+1}</text><text x="${x+24}" y="310" font-size="14" letter-spacing="2" fill="${i===2?'#dce9c5':'#27734f'}">${labels[i]}</text>${textLines(p,x+24,354,34,17,i===2?'#ffffff':'#123e36',7)}`;}).join('');
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="640" viewBox="0 0 1280 640" role="img" aria-label="Mapa de estudo: ${escape(a.titulo)}"><title>${escape(a.titulo)}</title><rect width="1280" height="640" fill="#f0f4e8"/><g font-family="Arial, sans-serif"><text x="40" y="48" fill="#27734f" font-size="14" letter-spacing="2">ESCOLA DE SAÚDE · FRANCA J</text>${textLines(a.titulo,40,100,65,31,'#123e36',3)}${panels}<text x="40" y="607" fill="#52665f" font-size="12">${escape(t.titulo)} · ${escape(m.titulo)}</text></g></svg>`;
 fs.writeFileSync(`public/ilustracoes/${t.id}-${a.id}.svg`,svg);
}
console.log(`Generated ${trilhas.flatMap(t=>t.modulos.flatMap(m=>m.aulas)).length} unique lesson diagrams.`);
