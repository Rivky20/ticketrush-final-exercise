const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('member pays 280 per ticket plus full fee: 2 tickets cost 584', function () { assertEq(calcTotal(2, true), 584); });
test('regular customer explicitly: 2 tickets cost 724', function () { assertEq(calcTotal(2, false), 724); });
test('members may buy up to 4', function () { assertEq(maxTickets(true), 4); });
test('regular customers explicitly may buy up to 8', function () { assertEq(maxTickets(false), 8); });
