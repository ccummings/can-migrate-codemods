// This is a generated file, see src/templates/replace/replace.ejs
import getConfig from '../../../utils/getConfig';
import dependencyUtils from '../../../utils/dependencyUtils';
import makeDebug from 'debug';
const debug = makeDebug('can-migrate:can-stache-replace');

export default function transformer(file, api, options) {
  const config = getConfig(options.config);
  debug(`Running on ${file.path}`);
  const j = api.jscodeshift;
  const printOptions = options.printOptions || {};
  const root = j(file.source);
  let found = false;
  const newName = config.moduleToName['can-stache'];

  debug(`Finding all instances of 'can.stache'`);
  root.find(j.MemberExpression).filter(expression => {
    let match = true;
    
      match = match && expression.value.object.name === 'can';
     
    return match && expression.value.property.name === 'stache';
  }).forEach(expression => {
    debug(`Replacing all instances of 'can.stache' with '${newName}'`);
    found = true;
    
    // can.Map -> canMap
    j(expression).replaceWith(j.identifier(newName));
    
  });

  if (found) {
    dependencyUtils.add(root, 'can-stache', newName, ['can', 'can/can', 'can/can.js']);
  }
  return root.toSource(printOptions);
}
