/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const makeDocsForFile = require('./make-docs-for-file');

const readFile = relPath =>
  fs.readFileSync(path.resolve(__dirname, relPath), 'utf8');

const readmeHeader = readFile('../source/readme-header.md');

const sourceFiles = fs
  .readdirSync(path.resolve(__dirname, '../source'))
  .filter(item => item.match(/\.js$/));

const tableOfContents = sourceFiles
  .map(fileName => {
    const link = fileName.replace('.js', '');
    return `- [${link}](#${link})`;
  })
  .join('\n');

const docs = sourceFiles.map(fileName => {
  try {
    const fileContent = readFile(`../source/${fileName}`);
    return makeDocsForFile(fileName, fileContent);
  } catch (error) {
    console.error(`Doc generation failed for '${fileName}':`, error.message);
  }
});

const readmeContent = [readmeHeader].concat(tableOfContents, docs).join('\n\n');
fs.writeFileSync(path.resolve(__dirname, '../README.md'), readmeContent);
