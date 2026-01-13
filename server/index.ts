// Next.js dev server launcher for Replit
import { spawn } from 'child_process';

const port = process.env.PORT || '5000';
console.log(`Starting Next.js on port ${port}...`);

// Spawn Next.js dev process
const next = spawn('npx', ['next', 'dev', '-p', port], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env },
});

// Error handling
next.on('error', (err) => {
  console.error('Failed to start Next.js:', err);
  process.exit(1);
});

next.on('close', (code) => {
  console.log(`Next.js exited with code ${code}`);
  process.exit(code || 0);
});

// Graceful shutdown
process.on('SIGINT', () => next.kill('SIGINT'));
process.on('SIGTERM', () => next.kill('SIGTERM'));
