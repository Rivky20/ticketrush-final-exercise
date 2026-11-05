const { calcTotal } = require('../js/pricing');

// חתימה סופית: calcTotal(qty, isMember, isStudent)
test('student discount: 2 tickets', function () { assertEq(calcTotal(2, false, true), 619); });
test('no discount for regular price', function () { assertEq(calcTotal(2, false, false), 724); });
test('member and student: only the bigger discount (20%) applies', function () { assertEq(calcTotal(2, true, true), 584); });
test('service fee is never discounted for students', function () { assertEq(calcTotal(1, false, true), 350 * 0.85 + 12); });
