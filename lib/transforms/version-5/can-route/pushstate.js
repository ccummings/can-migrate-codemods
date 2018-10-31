'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;

var _dependencyUtils = require('../../../utils/dependencyUtils');

var _dependencyUtils2 = _interopRequireDefault(_dependencyUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformer(file, api) {
  var path = file.path;
  var type = path.slice(path.lastIndexOf('.') + 1);
  var j = api.jscodeshift;
  var root = j(file.source);

  if (type === 'js') {
    var routeImportVariable = '';

    // replace `import 'can-route-pushstate';`
    // with `import RoutePushstate from 'can-route-pushstate';`
    _dependencyUtils2.default.find(root, ['can-route-pushstate/can-route-pushstate', 'can-route-pushstate']).replaceWith(function () {
      return _dependencyUtils2.default.create(root, 'can-route-pushstate', 'RoutePushstate');
    });

    // find the name for the can-route import, ie 'canRoute' in:
    // 'import canRoute from 'can-route';
    _dependencyUtils2.default.find(root, ['can-route/can-route', 'can-route']).find(j.ImportDefaultSpecifier).forEach(function (foo) {
      routeImportVariable = foo.value.local.name;
    });

    // find all the places that route.start is called
    root.find(j.MemberExpression, {
      object: {
        name: routeImportVariable
      },
      property: {
        name: 'register'
      }
    })
    // find the first time route.register is called
    .at(0).closest(j.ExpressionStatement)
    // set route.urlData before
    .insertBefore([routeImportVariable + '.urlData = new RoutePushstate();']);
  }

  return root.toSource();
}
module.exports = exports['default'];