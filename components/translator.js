const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

let translateWord=(original,word)=>{
  let orgLetter=original.substr(0,1);
  let letter=word.substr(0,1);
  if (orgLetter===orgLetter.toUpperCase()) {
    return letter.toUpperCase()+word.substr(1);
  }
  return word.toLowerCase();
}

class Translator {
  translate(text,locale) {
    let words = text.match(/\S+/g);
    switch (locale) {
      case 'american-to-british':
        return words.map(w=>{
          let curWord=w.toLowerCase();
          let tmp = americanOnly[curWord]||americanToBritishSpelling[curWord]||americanToBritishTitles[curWord];
          if (tmp) {
            return `<span class="highlight">${translateWord(w,tmp)}</span>`;
          }
          return w;
        }).join(' ').replace(/\d+:\d+/g,l=>`<span class="highlight">${l}</span>`.split(":").join("."));
        break;
      case 'british-to-american':
        return words.map(w=>{
          let curWord = w.toLowerCase();
          let tmp = britishOnly[curWord];
          if (tmp) {
            return `<span class="highlight">${translateWord(w,tmp)}</span>`;
          }
          return w;
        }).join(' ').replace(/\d+\.\d+/g,l=>`<span class="highlight">${l}</span>`.split(".").join(":"));
        break;
    }
  }
}

module.exports = Translator;