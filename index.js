import express from 'express';
import path from 'path';
import { exec } from 'child_process';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(join(__dirname, 'public')));

function getCurrentVolume(callback) {
  exec(`osascript -e "output volume of (get volume settings)"`, (err, stdout) => {
    if (err) return callback(50); 
    const volume = parseInt(stdout.trim(), 10);
    callback(volume);
  });
}

function setVolume(vol) {
  exec(`osascript -e "set volume output volume ${vol}"`);
}

app.get('/volume/up', (req, res) => {
  console.log('🔼 /volume/up called');
  getCurrentVolume((current) => {
    const newVol = Math.min(current + 10, 100);
    setVolume(newVol);
    res.send(`Volume increased to ${newVol}`);
  });
});

app.get('/volume/down', (req, res) => {
  console.log('🔽 /volume/down called');
  getCurrentVolume((current) => {
    const newVol = Math.max(current - 10, 0);
    setVolume(newVol);
    res.send(`Volume decreased to ${newVol}`);
  });
});

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
