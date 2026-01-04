import { expect, test, describe, it } from 'vitest';
import { calcCompoundInterest } from "../utils/calccompoundinterest.ts";


describe('Function calcCompoundInterest', () => {
    test('standard input', () => {
        const initialDeposit = 100000;
        const addedMonthly = 5000;
        const interestRate = 9.3;
        const years = 20;
        const returned = calcCompoundInterest(initialDeposit, addedMonthly, interestRate, years);

        expect(returned.total).toBe(4107358);
        expect(returned.totalDeposit).toBe(1300000);
        expect(returned.totalInterest).toBe(2807358);
    });

    test('Should only return initialDeposit, interestRate = 0q, years = 0', () => {
        const returned = calcCompoundInterest(1000, 500, 0, 0);
        expect(returned.total).toBe(1000);
        expect(returned.totalDeposit). toBe(1000);
        expect(returned.totalInterest).toBe(0);
    });
});

describe('calcCompoundInterest - yearlyBreakDown', () => {

    it('Should return empty history', () => {
        const result = calcCompoundInterest(1000, 100, 5, 0);
        expect(result.yearlyBreakDown).toHaveLength(0);
    });

    it('should have the correct number of records in history', () => {
        const years = 5;
        const result = calcCompoundInterest(1000, 100, 5, years);
        expect(result.yearlyBreakDown).toHaveLength(years);
    });

    it('Should generate the correct year', () => {
        const currentYear = new Date().getFullYear();
        const years = 3;
        const { yearlyBreakDown } = calcCompoundInterest(1000, 100, 5, years);

        expect(yearlyBreakDown[0].year).toBe(currentYear + 1);
        expect(yearlyBreakDown[2].year).toBe(currentYear + 3);
    });

    it('the last year in history should correspond to the overall result', () => {
        const result = calcCompoundInterest(5000, 500, 7, 10);
        const lastYear = result.yearlyBreakDown[result.yearlyBreakDown.length - 1];

        expect(lastYear.totalDeposit).toBe(result.totalDeposit);
        expect(lastYear.totalInterest).toBe(result.totalInterest);
    });

    it('deposits should gradually increase over time', () => {
        const addedMonthly = 100;
        const { yearlyBreakDown } = calcCompoundInterest(1000, addedMonthly, 5, 2);

        const year1Deposit = yearlyBreakDown[0].totalDeposit;
        const year2Deposit = yearlyBreakDown[1].totalDeposit;

        // The difference between year 1 and 2 must be exactly 12 * monthly deposit
        expect(year2Deposit - year1Deposit).toBe(addedMonthly * 12);
    });
});
