// This is a generated file, see src/templates/import/import.ejs
import getConfig from '../../../utils/getConfig';
import renameImport from '../../../utils/renameImport';
import replaceRefs from '../../../utils/replaceRefs';
import makeDebug from 'debug';
const debug = makeDebug('can-migrate:can-map-backup-import');

export default function transformer(file, api, options) {
  const config = getConfig(options.config);
  debug(`Running on ${file.path}`);
  const newLocalName = options.replace ? config.moduleToName['can-map-backup'] ? config.moduleToName['can-map-backup'] : false : false;
  const j = api.jscodeshift;
  const printOptions = options.printOptions || {};
  const root = j(file.source);
  const oldLocalName = renameImport(root, {
    oldSourceValues: ['can/map/backup/', 'can/map/backup/backup', 'can/map/backup/backup.js' ],
    newSourceValue: 'can-map-backup',
    newLocalName
  });
  if(options.replace && oldLocalName) {
    replaceRefs(j, root, {
      oldLocalName,
      newLocalName
    });
  }
  return root.toSource(printOptions);
}
