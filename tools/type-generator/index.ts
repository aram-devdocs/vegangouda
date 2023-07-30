import { convertFromDirectory } from 'joi-to-typescript';
import { settings } from './constants';

async function types(): Promise<void> {
  // eslint-disable-next-line no-console
  console.log('Running joi-to-typescript...');

  // Configure your settings here
  const result = await convertFromDirectory(settings);

  console.log('Result:', result);

  if (result) {
    // eslint-disable-next-line no-console
    console.log('Completed joi-to-typescript');
  } else {
    // eslint-disable-next-line no-console
    console.log('Failed to run joi-to-typescrip');
  }
}

types();
