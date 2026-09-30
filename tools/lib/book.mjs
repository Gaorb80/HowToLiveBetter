// README parser & file list generator: shared between EPUB (tools/epub) and PDF (tools/pdf) builds.
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export const REPO = 'https://github.com/Gaorb80/HowToLiveBetter';
export const SITE = 'https://Gaorb80.github.io/HowToLiveBetter/';
export const TITLE = 'Cẩm nang cuộc sống tối ưu chi phí hiệu quả';
export const RELEASE = `${REPO}/releases/download/epub-latest`;

export const read = p => readFileSync(resolve(ROOT, p), 'utf8').replace(/\r\n/g, '\n');
export const unique = arr => [...new Set(arr)];

export function gitCommit() {
  try {
    return execSync('git rev-parse HEAD', { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return process.env.GITHUB_SHA ?? '';
  }
}

export function buildStamp() {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Ho_Chi_Minh', dateStyle: 'short', timeStyle: 'short' }).format(new Date());
}

export function stripBackLink(md) {
  return md.replace(/^\[← (?:回总目录|Quay lại mục lục)\]\([^)]*\)\s*\n/, '');
}

// Extract sections between headers in README.md
export function readBook() {
  const readme = read('README.md');
  const lines = readme.split('\n');
  const findLine = (patterns) => {
    const arr = Array.isArray(patterns) ? patterns : [patterns];
    return lines.findIndex(l => arr.some(p => l.startsWith(p)));
  };
  const between = (fromPatterns, toPatterns) => {
    const a = findLine(fromPatterns);
    const b = lines.findIndex((l, i) => i > a && (Array.isArray(toPatterns) ? toPatterns : [toPatterns]).some(p => l.startsWith(p)));
    if (a < 0 || b < 0) throw new Error(`README: Không tìm thấy đoạn giữa ${fromPatterns} và ${toPatterns}`);
    return lines.slice(a, b).join('\n');
  };
  const description = between(['# Cẩm nang cuộc sống', '# 高性价比人生指南'], '[![')
    .split('\n').slice(1).map(l => l.replace(/<[^>]+>/g, '').trim()).filter(Boolean).join('');
  const frontMd = between(['## Những câu hỏi cuốn sách muốn trả lời', '## 这本书想回答的问题'], ['## Mục lục', '## 目录']);
  const contentsMd = between(['## Mục lục', '## 目录'], ['## Nội dung chính', '## 正文'])
    .split('\n\n').filter(p => !p.includes('index.html')).join('\n\n');
  const bookFiles = unique([...contentsMd.matchAll(/\]\((book\/[^)#]+\.md)\)/g)].map(m => m[1]));
  const docFiles = unique([...readme.matchAll(/\]\((docs\/[^)#/]+\.md)\)/g)].map(m => m[1]));
  if (bookFiles.length === 0) throw new Error('Không tìm thấy file book/ trong mục lục README');
  return { readme, description, frontMd, contentsMd, bookFiles, docFiles };
}
