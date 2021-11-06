const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();
suite('Unit Tests', () => {
  test('Translate Mangoes are my favorite fruit. to British English', function(done) {
      let text = 'Mangoes are my favorite fruit.';
      let locale = 'american-to-british';
      assert.equal(translator.translate(text,locale),'Mangoes are my <span class="highlight">favourite</span> fruit.');
      done();
  });

  test('Translate I ate yogurt for breakfast. to British English', function(done) {
      let text = 'I ate yogurt for breakfast.';
      let locale = 'american-to-british';
      assert.equal(translator.translate(text,locale),'I ate <span class="highlight">yoghurt</span> for breakfast.');
      done();
  });

  test(`Translate We had a party at my friend's condo. to British English`, function(done) {
      let text = `We had a party at my friend's condo.`;
      let locale = 'american-to-british';
      assert.equal(translator.translate(text,locale),`We had a party at my friend's condo.`);
      done();
  });

  test(`Translate Can you toss this in the trashcan for me? to British English`, function(done) {
      let text = `Can you toss this in the trashcan for me?`;
      let locale = 'american-to-british';
      assert.equal(translator.translate(text,locale),`Can you toss this in the <span class="highlight">bin</span> for me?`);
      done();
  });

  test(`Translate The parking lot was full. to British English`, function(done) {
      let text = `The parking lot was full.`;
      let locale = 'american-to-british';
      assert.equal(translator.translate(text,locale),`The parking lot was full.`);
      done();
  });

  test(`Translate Like a high tech Rube Goldberg machine. to British English`, function(done) {
      let text = `Like a high tech Rube Goldberg machine.`;
      let locale = 'american-to-british';
      assert.equal(translator.translate(text,locale),`Like a high tech Rube Goldberg machine.`);
      done();
  });

  test(`Translate To play hooky means to skip class or work. to British English`, function(done) {
      let text = `To play hooky means to skip class or work.`;
      let locale = 'american-to-british';
      assert.equal(translator.translate(text,locale),`To play hooky means to skip class or work.`);
      done();
  });

  test(`Translate No Mr. Bond, I expect you to die. to British English`, function(done) {
      let text = `No Mr. Bond, I expect you to die.`;
      let locale = 'american-to-british';
      assert.equal(translator.translate(text,locale),`No <span class="highlight">Mr</span> Bond, I expect you to die.`);
      done();
  });

  test(`Translate Dr. Grosh will see you now. to British English`, function(done) {
      let text = `Dr. Grosh will see you now.`;
      let locale = 'american-to-british';
      assert.equal(translator.translate(text,locale),`<span class="highlight">Dr</span> Grosh will see you now.`);
      done();
  });

  test(`Translate Lunch is at 12:15 today. to British English`, function(done) {
      let text = `Lunch is at 12:15 today.`;
      let locale = 'american-to-british';
      assert.equal(translator.translate(text,locale),`Lunch is at <span class="highlight">12.15</span> today.`);
      done();
  });

  test(`Translate We watched the footie match for a while. to American English`, function(done) {
      let text = `We watched the footie match for a while.`;
      let locale = 'british-to-american';
      assert.equal(translator.translate(text,locale),`We watched the <span class="highlight">soccer</span> match for a while.`);
      done();
  });

  test(`Translate Paracetamol takes up to an hour to work. to American English`, function(done) {
      let text = `Paracetamol takes up to an hour to work.`;
      let locale = 'british-to-american';
      assert.equal(translator.translate(text,locale),`<span class="highlight">Tylenol</span> takes up to an hour to work.`);
      done();
  });

  test(`Translate First, caramelise the onions. to American English`, function(done) {
      let text = `First, caramelise the onions.`;
      let locale = 'british-to-american';
      assert.equal(translator.translate(text,locale),`First, caramelise the onions.`);
      done();
  });

  test(`Translate I spent the bank holiday at the funfair. to American English`, function(done) {
      let text = `I spent the bank holiday at the funfair.`;
      let locale = 'british-to-american';
      assert.equal(translator.translate(text,locale),`I spent the bank holiday at the funfair.`);
      done();
  });

  test(`Translate I had a bicky then went to the chippy. to American English`, function(done) {
      let text = `I had a bicky then went to the chippy.`;
      let locale = 'british-to-american';
      assert.equal(translator.translate(text,locale),`I had a <span class="highlight">cookie</span> then went to the chippy.`);
      done();
  });

  test(`Translate I've just got bits and bobs in my bum bag. to American English`, function(done) {
      let text = `I've just got bits and bobs in my bum bag.`;
      let locale = 'british-to-american';
      assert.equal(translator.translate(text,locale),`I've just got bits and bobs in my bum bag.`);
      done();
  });

  test(`Translate The car boot sale at Boxted Airfield was called off. to American English`, function(done) {
      let text = `The car boot sale at Boxted Airfield was called off.`;
      let locale = 'british-to-american';
      assert.equal(translator.translate(text,locale),`The car boot sale at Boxted Airfield was called off.`);
      done();
  });

  test(`Translate Have you met Mrs Kalyani? to American English`, function(done) {
      let text = `Have you met Mrs Kalyani?`;
      let locale = 'british-to-american';
      assert.equal(translator.translate(text,locale),`Have you met Mrs Kalyani?`);
      done();
  });

  test(`Translate Prof Joyner of King's College, London. to American English`, function(done) {
      let text = `Prof Joyner of King's College, London.`;
      let locale = 'british-to-american';
      assert.equal(translator.translate(text,locale),`Prof Joyner of King's College, London.`);
      done();
  });

  test(`Translate Tea time is usually around 4 or 4.30. to American English`, function(done) {
      let text = `Tea time is usually around 4 or 4.30.`;
      let locale = 'british-to-american';
      assert.equal(translator.translate(text,locale),`Tea time is usually around 4 or <span class="highlight">4:30</span>.`);
      done();
  });

  test(`Highlight translation in Mangoes are my favorite fruit.`, function(done) {
      let text = `Mangoes are my favorite fruit.`;
      let locale = 'american-to-british';
      assert.equal(translator.translate(text,locale),`Mangoes are my <span class="highlight">favourite</span> fruit.`);
      done();
  });

  test(`Highlight translation in I ate yogurt for breakfast.`, function(done) {
      let text = `I ate yogurt for breakfast.`;
      let locale = 'american-to-british';
      assert.equal(translator.translate(text,locale),`I ate <span class="highlight">yoghurt</span> for breakfast.`);
      done();
  });

  test(`Highlight translation in We watched the footie match for a while.`, function(done) {
      let text = `We watched the footie match for a while.`;
      let locale = 'british-to-american';
      assert.equal(translator.translate(text,locale),`We watched the <span class="highlight">soccer</span> match for a while.`);
      done();
  });

  test(`Highlight translation in Paracetamol takes up to an hour to work.`, function(done) {
      let text = `Paracetamol takes up to an hour to work.`;
      let locale = 'british-to-american';
      assert.equal(translator.translate(text,locale),`<span class="highlight">Tylenol</span> takes up to an hour to work.`);
      done();
  });

});
