const fs = require('fs');

const writeContent = (file, content) => {
  fs.writeFileSync(`/${file}`, content);
  return 'ok';
}

module.exports = writeContent;