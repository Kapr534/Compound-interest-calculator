

export function calcCompoundInterest(
    initialDeposit: number,
    addedMonthly: number,
    interestRate: number,
    years: number
) {
    const monthlyRate: number = interestRate /100 / 12;
    const currentYear: number = new Date().getFullYear();

    let total = initialDeposit;
    let totalDeposit = initialDeposit;
    const yearlyBreakDown = [];

    for (let y = 1; y <= years; y++) {
        for (let m = 1; m <= 12; m++) {
            total *= (1 + monthlyRate);
            total += addedMonthly;
            totalDeposit += addedMonthly;
        }

        yearlyBreakDown.push({
            year: currentYear + y,
            total: Math.round(total),
            totalDeposit: Math.round(totalDeposit),
            totalInterest: Math.round(total - totalDeposit),
        })
    }


    return {
        total: Math.round(total),
        totalDeposit: Math.round(totalDeposit),
        totalInterest: Math.round(total - totalDeposit),
        yearlyBreakDown: yearlyBreakDown,
    }
}
