'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();
  const locals = ['american-to-british','british-to-american'];
  app.route('/api/translate')
    .post((req, res) => {
      if (req.body.text==='') {
        res.json({ error: 'No text to translate' });
        return;
      }
      if(!req.body||!req.body.text||!req.body.locale){
        res.json({ error: 'Required field(s) missing' });
        return;
      }
      if (!locals.includes(req.body.locale)) {
        res.json({ error: 'Invalid value for locale field' });
        return;
      }
      let result = translator.translate(req.body.text,req.body.locale);
      // console.log('locale',req.body.locale,'text',req.body.text,'translation',result);
      if (result===req.body.text) {
        result="Everything looks good to me!";
      }
      res.json({text:req.body.text,translation:result});
    });
};
