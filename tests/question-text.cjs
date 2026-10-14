const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),publicDir=fs.existsSync(path.join(root,'dist/index.html'))?path.join(root,'dist'):root,c=vm.createContext({});
for(const year of [2024,2025]){
  vm.runInContext(fs.readFileSync(path.join(publicDir,`assets/data/questions-${year}.js`),'utf8'),c);
  const qs=c.examQuestionText[year];assert.equal(qs.length,185);
  for(const language of ['ingles','espanhol']){
    const selected=qs.filter(q=>q.number>5||q.language===language);assert.equal(selected.length,180);assert.equal(new Set(selected.map(q=>q.number)).size,180);
    for(const q of selected){assert(q.statement.length>0,`${year}/${q.number}: enunciado vazio`);assert.equal(q.alternatives.map(a=>a.letter).join(''),'ABCDE');assert(q.alternatives.every(a=>a.text||a.visuals.length),`${year}/${q.number}: alternativa vazia`);assert(!/QUEST[Ãã]O\s+\d/.test(q.statement));for(const visual of [...q.visuals,...q.original,...q.alternatives.flatMap(a=>a.visuals)])assert(visual.box[2]>visual.box[0]&&visual.box[3]>visual.box[1]);}
  }
}
console.log('OK: 360 questões, versões inglês/espanhol, cinco alternativas e recortes válidos.');
