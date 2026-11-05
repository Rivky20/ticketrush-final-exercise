// רשימת המתנה – כשהכרטיסים אוזלים לקוחות משאירות מייל

// מייל תקין: יש @, ואחריו יש נקודה (למשל name@example.com)
function isValidEmail(email) {
  const at = email.indexOf('@');
  return at > 0 && email.indexOf('.', at + 2) > at + 1 && !email.endsWith('.');
}

// מחזירה מערך חדש – לא משנה את המערך שהתקבל
function joinWaitlist(list, email) {
  const clean = String(email == null ? '' : email).trim().toLowerCase();
  if (!isValidEmail(clean)) return list.slice();
  if (list.indexOf(clean) !== -1) return list.slice();
  return list.concat([clean]);
}

module.exports = { joinWaitlist };
