// scripts/build.js

const { spawn } = require('child_process');

const child = spawn('node', ['node_modules/react-scripts/scripts/build.js'], { stdio: 'inherit' });

child.on('close', (code) => {
  process.exit(code);
});
