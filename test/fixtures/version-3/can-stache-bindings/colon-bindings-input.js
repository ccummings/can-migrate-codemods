Component.extend({
  tag: 'my-tag',
  template: stache(
    '<input {^$value}="H1" {$value}="H2" {($value)}="H3" ($value)="H4" ' +
    '{^value}="H1" {value}="H2" {(value)}="H3" (value)="H4" ' +
    'value="{H1}" can-click="H3" ' +
    'can-hover="{H5}" can-enter="H4 foo bar=\'baz\' thud=quux">' +
    '<input can-value="H1">' +
    '<input type="checkbox" can-value="H2" />' +
    '<input type="checkbox" can-value="H3" can-true-value="Y" can-false-value="N"/>' +
    '<input type="radio" can-value="H4" />' +
    '<input type="radio" can-value="H5" value="thisOne" />'
  )
});
