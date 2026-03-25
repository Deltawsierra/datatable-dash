import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDir = path.resolve(__dirname, '..');
const repoRoot = path.resolve(__dirname, '../..');

if (!process.env.NODE_ENV) {
  (process.env as Record<string, string>).NODE_ENV = 'development';
}

const port = process.env.PORT || '5000';
const apiPort = '8000';

console.log(`Starting Next.js on port ${port}...`);
console.log(`Starting FastAPI on port ${apiPort}...`);

const next = spawn('npx', ['next', 'dev', '-p', port], {
  stdio: 'inherit',
  shell: true,
  cwd: frontendDir,
  env: { ...process.env },
});

const fastapi = spawn(
  'python',
  ['-m', 'uvicorn', 'api.main:app', '--host', '0.0.0.0', '--port', apiPort, '--reload'],
  {
    stdio: 'inherit',
    shell: true,
    cwd: repoRoot,
    env: { ...process.env, VERSION: process.env.VERSION || 'DEV' },
  }
);

next.on('error', (err) => {
  console.error('Failed to start Next.js:', err);
});

next.on('close', (code) => {
  console.log(`Next.js exited with code ${code}`);
  fastapi.kill('SIGTERM');
  process.exit(code || 0);
});

fastapi.on('error', (err) => {
  console.error('Failed to start FastAPI:', err);
});

fastapi.on('close', (code) => {
  console.log(`FastAPI exited with code ${code}`);
});

process.on('SIGINT', () => {
  next.kill('SIGINT');
  fastapi.kill('SIGINT');
});
process.on('SIGTERM', () => {
  next.kill('SIGTERM');
  fastapi.kill('SIGTERM');
});
