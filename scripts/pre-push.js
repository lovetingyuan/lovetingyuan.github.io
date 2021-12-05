const question = {
  type: 'confirm',
  name: 'value',
  message: '在push之前记得build',
  initial: true
}
const prompts = require('prompts');

(async () => {
  await prompts(question);
})();
