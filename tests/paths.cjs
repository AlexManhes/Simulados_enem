const fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..');
const publicDir=fs.existsSync(path.join(root,'dist/index.html'))?path.join(root,'dist'):root;
for(const page of ['index.html','pages/reader.html']){
  const html=fs.readFileSync(path.join(publicDir,page),'utf8');
  for(const [,reference] of html.matchAll(/(?:src|href)="([^"]+)"/g)){
    if(/^(https?:|#)/.test(reference))continue;
    assert(fs.existsSync(path.resolve(publicDir,path.dirname(page),reference.split('?')[0])),`${page}: ${reference}`);
  }
}
assert(!fs.readFileSync(path.join(publicDir,'assets/js/official-text.js'),'utf8').includes('<iframe'));
for(const year of [2024,2025])assert(fs.existsSync(path.join(publicDir,`assets/data/questions-${year}.js`)));
console.log('OK: caminhos válidos e interface oficial em texto, sem leitor de PDF embutido.');
