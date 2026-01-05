

export interface YearlyBreakDownData {
    year: number;
    totalDeposit: number;
    totalInterest: number;
}

export function calculateCompoundInterest(
    initialDeposit: number,
    addedMonthly: number,
    interestRate: number,
    years: number,
    currentYear: number = new Date().getFullYear(),
) {
    const monthlyRate: number = interestRate /100 / 12;

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