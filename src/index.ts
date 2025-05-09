#!/usr/bin/env node

import { program } from 'commander';
import { analyzer } from './analyze.js';

program
  .name('tracker-analyzer')
  .description('Analyze trackers and fingerprinting on a website')
  .argument('<url>', 'URL to analyze')
  .action(async (url) => {
    try {
      await analyzer(url);
    } catch (err) {
        console.error('Error during analysis:', err);
        process.exit(1);
    }
  });

program.parse();
