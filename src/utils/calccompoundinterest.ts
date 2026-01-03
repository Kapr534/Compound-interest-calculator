

export default function calcCompoundInterest(
    initialDeposit: number,
    addedMonthly: number,
    interestRate: number,
    years: number
) {
    const monthlyRate: number = interestRate /100 / 12;
    const totalMonths: number = years * 12;

    // Compound interest formula
    const initialGrowth = initialDeposit * (1 + monthlyRate) ** totalMonths;

    // Monthly added compound interest formula
    const monthlyGrowth = monthlyRate > 0
        ? addedMonthly * ((1 + monthlyRate) ** totalMonths - 1) / monthlyRate
        : addedMonthly * totalMonths;

    const total = Math.round(initialGrowth + monthlyGrowth);
    const totalDeposit = initialDeposit + (addedMonthly * totalMonths);

    return {
        total: total,
        totalDeposit: totalDeposit,
        totalInterest: total - totalDeposit,
    }
}
