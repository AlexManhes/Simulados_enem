const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.resolve(__dirname,'..');
const publicDir=fs.existsSync(path.join(root,'dist/index.html'))?path.join(root,'dist'):root;
const elements=new Map(),storage=new Map();
const el=s=>{if(!elements.has(s))elements.set(s,{innerHTML:'',value:'ingles',textContent:'',focus(){},prepend(){},showModal(){this.open=true},close(){this.open=false}});return elements.get(s)};
const c=vm.createContext({document:{querySelector:el,querySelectorAll:()=>[],createElement:()=>({})},localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},window:{scrollTo(){}}});
for(const f of ['assets/data/questions.js','assets/js/app.js','assets/data/official.js','assets/js/hub.js'])vm.runInContext(fs.readFileSync(path.join(publicDir,f),'utf8'),c);
const run=s=>vm.runInContext(s,c),html=()=>el('#main').innerHTML;
assert(html().includes('2024'));assert(html().includes('2025'));assert(html().includes('2026'));
for(const year of [2024,2025]){run(`chooseYear(${year});officialState.answers=officialExams[${year}].answers.slice();officialState.answers.splice(0,5,...officialExams[${year}].languages.ingles);`);const st=run('officialStats()');assert.equal(st.right,year===2024?179:177);assert.equal(st.wrong,0);assert.equal(st.blank,0);assert.equal(st.canceled,year===2024?1:3);run('renderOfficialResults()');assert(html().includes('Correta:'));
run('officialState.answers=Array(180).fill(null);');const empty=run('officialStats()');assert.equal(empty.blank,st.total);run('officialState.answers[0]=officialAnswer(0);saveOfficial();home();');}
run('chooseYear(2024)');assert.equal(run('officialState.answers[0]'), 'C');run('home();chooseYear(2025)');assert.equal(run('officialState.answers[0]'),'D');
run('home()');el('#language-2025').value='espanhol';run('chooseYear(2025)');assert.equal(run('officialAnswer(0)'),'B');assert.equal(run('officialState.answers[0]'),null);
run('finishOfficial()');el('#submit').onclick();assert(html().includes('177'));
run('home();chooseYear(2026);start();state.answers=questions.map(q=>q[4]);finish();');el('#submit').onclick();assert(html().includes('20 acertos · 0 erros · 0 em branco'));
console.log('OK: seleção 2024/2025/2026, 180 gabaritos por ano, anuladas, inglês/espanhol, progresso isolado, finalização oficial e autoral.');
