// This is a generated file, see src/templates/can-extend/can-extend.js
import getConfig from '../../../utils/getConfig';
import renameImport, { updateImport } from '../../../utils/renameImport';
import renameRequire from '../../../utils/renameRequire';
import makeDebug from 'debug';
import fileTransform from '../../../utils/fileUtil';

function transformer(file, api, options) {
  const debug = makeDebug(`can-migrate:can-stache-element:${file.path}`);
  const config = getConfig(options.config);
  const newLocalName = config.moduleToName['can-stache-element'];
  const j = api.jscodeshift;
  const printOptions = options.printOptions || {};

  return fileTransform(file, function (source) {
    const root = j(source);

    // Update default import
    // import Component from 'can-component'
    renameImport(root, {
      oldSourceValues: ['can-component'],
      newSourceValue: 'can-stache-element',
      newLocalName
    });
    // Update the destructured import
    // import { Component } from 'can'
    updateImport(j, root, {
      oldValue: 'Component',
      newValue: newLocalName
    });
    // Update require
    // const Component = require('can-component')
    renameRequire(root, {
      oldSourceValues: ['can-component'],
      newSourceValue: 'can-stache-element',
      newLocalName
    });

    debug(`Replacing import with ${newLocalName}`);

    return root.toSource(printOptions);
  });
}

transformer.forceJavaScriptTransform = true;

export default transformer;
