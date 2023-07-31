import { convertFromDirectory } from 'joi-to-typescript';
import { settings } from './constants';
import fs from 'fs';

async function types(): Promise<void> {
  // eslint-disable-next-line no-console
  console.log('Running joi-to-typescript...');

  // Configure your settings here
  const result = await convertFromDirectory(settings);

  console.log('Result:', result);

  if (result) {
    // eslint-disable-next-line no-console
    console.log('Completed joi-to-typescript');

    // some of the files in settings.typeOutputDirectory are having the text `import { undefined } from '.';` added to the top of the file. use fs to remove this line from any files in the typeOutputDirectory
    const files = fs.readdirSync(settings.typeOutputDirectory);
    files.forEach((file) => {
      const filePath = `${settings.typeOutputDirectory}/${file}`;
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const lines = fileContents.split('\n');
      const filteredLines = lines.filter(
        (line) => !line.includes("import { undefined } from '.';")
      );
      const newFileContents = filteredLines.join('\n');

      // write the new file contents to the file
      fs.writeFileSync(filePath, newFileContents);
    });
  } else {
    // eslint-disable-next-line no-console
    console.log('Failed to run joi-to-typescrip');
  }
}

types();
