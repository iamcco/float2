var test = require('tape');
var float2 = require('./index.js');

test('test float2', function (assert) {
  assert.plan(4);
  assert.strictEqual(float2.dot2(0.1, 5), 10000);
  assert.strictEqual(float2.dot2(-1.01, -2), -0.0101);
  assert.strictEqual(float2.dot2(1, 2), float2.dot2right(1, 2));
  assert.strictEqual(float2.dot2(1, -2), float2.dot2left(1, 2));
});

