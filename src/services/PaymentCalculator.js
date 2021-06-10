/**
 * 
 * @param {Number} amount 
 * @param {Number} tenure in years
 * @param {Number} interest Annual Interest Rate
 * @returns 
 */
export function calculatePayment(amount, tenure, interest) {
    const totalWeeks = Number(tenure) * 365 / 7;
    const weeklyInterest = (Number(interest) * 7)/(365 * 100);
    const pow = Math.pow( 1 + weeklyInterest, totalWeeks);
    const emi = (Number(amount) * weeklyInterest * pow) / (pow - 1);
    return emi.toFixed();
}