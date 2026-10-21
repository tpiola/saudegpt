const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const original=Module._resolveFilename;Module._resolveFilename=function(name,...args){return original.call(this,name.startsWith('@/')?path.resolve('src',name.slice(2))+'.ts':name,...args);};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpile(fs.readFileSync(f,'utf8'),{module:ts.ModuleKind.CommonJS}),f);
const {casosCampus,memoriaCampus,trilhaAtendimentoAvancado}=require('../src/content/campus.ts');
const {casosBalcao}=require('../src/content/pratica-balcao.ts');
const {CAMPUS_KEY,normalizarCampus,pontosCampus,lerCampus,salvarCampus}=require('../src/lib/campus-progress.ts');
assert.equal(casosCampus.length,24);assert.equal(casosCampus.flatMap(c=>c.etapas).length,48);assert.equal(memoriaCampus.length,12);
assert.equal(new Set(casosCampus.map(c=>c.id)).size,24);assert.equal(new Set(memoriaCampus.map(c=>c.id)).size,12);
const questions=new Set();for(const c of casosCampus){assert(c.minutos>0);assert(c.objetivo&&c.fechamento);assert.equal(c.etapas.length,c.nivel==='basico'?1:3);for(const e of c.etapas){assert(e.opcoes.length>=3);assert(e.correta>=0&&e.correta<e.opcoes.length);assert.equal(new Set(e.opcoes).size,e.opcoes.length);assert(e.explicacao.length>50&&e.fala.length>20);const signature=e.cliente+' '+e.pergunta;assert(!questions.has(signature));questions.add(signature);}}
assert.equal(trilhaAtendimentoAvancado.modulos.flatMap(m=>m.aulas).length,12);
const sample=casosCampus[0].id;const clean=normalizarCampus({concluidos:[sample,sample,'invalid',null],revisar:[sample,'invalid'],cartoes:[memoriaCampus[0].id,'invalid']});assert.deepEqual(clean.concluidos,[sample]);assert.equal(pontosCampus(clean),30);assert.equal(pontosCampus({...clean,concluidos:[sample,sample]}),30);
const storage=new Map();global.localStorage={getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v)};global.window={dispatchEvent:()=>true};
storage.set('saudegpt-pratica-balcao-v1',JSON.stringify(casosBalcao.map(c=>c.id)));const migrated=lerCampus();assert.equal(migrated.concluidos.length,12);assert.equal(pontosCampus(migrated),360);salvarCampus(migrated);assert.deepEqual(lerCampus(),migrated);storage.set(CAMPUS_KEY,'broken-json');assert.equal(lerCampus().concluidos.length,0);
const all=normalizarCampus({concluidos:casosCampus.map(c=>c.id),cartoes:memoriaCampus.map(c=>c.id)});assert.equal(pontosCampus(all),990);assert.equal(all.cartoes.length,12);
console.log('PASS: 24 cases, 48 unique decisions, 12 cards, 12 new lessons; point deduplication, invalid-data handling, legacy migration and persistence.');
