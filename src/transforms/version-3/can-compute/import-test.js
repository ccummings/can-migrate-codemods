require('mocha');
const utils = require('../../../../test/utils');
const transforms = require('../../../../');

const toTest = transforms.filter(function(transform) {
  return transform.name === 'can-compute/import.js';
})[0];

describe('can-compute-import', function() {

  it('replaces import dependencies and references', function() {
    const fn = require(toTest.file);
    const inputPath = `fixtures/${toTest.fileName.replace('.js', '-input.js')}`;
    const outputPath = `fixtures/${toTest.fileName.replace('.js', '-output.js')}`;
    utils.diffFiles(fn, inputPath, outputPath);
  });
});