const { joinWaitlist } = require('../js/waitlist');

test('adds a valid email to the waitlist', function () {
  assertEq(JSON.stringify(joinWaitlist([], 'dana@example.com')), '["dana@example.com"]');
});
test('trims spaces and lowercases the email', function () {
  assertEq(JSON.stringify(joinWaitlist([], '  Dana@Example.COM ')), '["dana@example.com"]');
});
test('does not modify the original array', function () {
  const list = ['a@b.co'];
  const out = joinWaitlist(list, 'c@d.co');
  assertEq(list.length, 1);
  assertEq(out === list, false);
});
test('email without @ is ignored', function () {
  assertEq(JSON.stringify(joinWaitlist(['a@b.co'], 'dana.example.com')), '["a@b.co"]');
});
test('email without a dot after @ is ignored', function () {
  assertEq(JSON.stringify(joinWaitlist(['a@b.co'], 'dana@example')), '["a@b.co"]');
});
test('duplicate email (after normalising) is not added twice', function () {
  assertEq(JSON.stringify(joinWaitlist(['dana@example.com'], ' DANA@example.com')), '["dana@example.com"]');
});
