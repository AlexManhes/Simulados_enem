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
assert(fs.readFileSync(path.join(publicDir,'assets/js/hub.js'),'utf8').includes('src="pages/reader.html?url='));
console.log('OK: arquivos HTML, CSS, JavaScript, dados e leitor de PDF com caminhos válidos.');
