Component.extend({
  tag: 'my-tag',
  template: stache(
    '<input el:value:to="H1" el:value:from="H2" el:value:bind="H3" on:el:value="H4" ' +
    'vm:value:to="H1" vm:value:from="H2" vm:value:bind="H3" on:vm:value="H4" ' +
    'vm:value:from="H1" on:el:click="H3(this, scope.element, scope.event)" ' +
    'on:el:hover="H5(this, scope.element, scope.event)" on:el:enter="H4(foo, bar=\'baz\' thud=quux)">' +
    '<input el:value:bind="H1">' +
    '<input type="checkbox" el:checked:bind="H2" />' +
    '<input type="checkbox" el:checked:bind="either-or(H3, \'Y\', \'N\')"/>' +
    '<input type="radio" el:checked:bind="H4" />' +
    '<input type="radio" value="thisOne" el:checked:bind="equal(H5, \'thisOne\')" />'
  )
});
