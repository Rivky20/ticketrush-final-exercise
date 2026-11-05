// מחירון TicketRush
const TICKET_PRICE = 350;      // ₪ לכרטיס
const SERVICE_FEE = 12;        // ₪ עמלת שירות לכל כרטיס (אף פעם לא בהנחה)
const MAX_TICKETS = 8;         // מקסימום כרטיסים להזמנה (לקוחה רגילה)
const MEMBER_DISCOUNT = 0.2;   // 20% הנחה על מחיר הכרטיס לחברות מועדון
const STUDENT_DISCOUNT = 0.15; // מבצע סטודנטיות: 15% על מחיר הכרטיס
const MEMBER_MAX_TICKETS = 6;  // מכסה לחברות מועדון במכירה המוקדמת

function maxTickets(isMember) {
  return isMember ? MEMBER_MAX_TICKETS : MAX_TICKETS;
}

// ההנחות לא מצטברות: מקבלים רק את ההנחה הגדולה מביניהן
function discountFor(isMember, isStudent) {
  return Math.max(isMember ? MEMBER_DISCOUNT : 0, isStudent ? STUDENT_DISCOUNT : 0);
}

function calcTotal(qty, isMember, isStudent) {
  if (!Number.isInteger(qty) || qty < 1 || qty > maxTickets(isMember)) return null;
  const ticketPrice = TICKET_PRICE * (1 - discountFor(isMember, isStudent));
  return qty * (ticketPrice + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = {
    TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, MEMBER_DISCOUNT, STUDENT_DISCOUNT, MEMBER_MAX_TICKETS,
    maxTickets, calcTotal
  };
}
