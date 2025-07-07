const fs = require('fs-extra');

(async () => {
  const from = './../docs/browser';
  const to = './../docs';

  try {
    await fs.copy(from, to, { overwrite: true });
    await fs.remove(from);
    console.log('Moved contents from docs/browser → docs/');
  } catch (err) {
    console.error('Error copying files:', err);
    process.exit(1);
  }
})();
