import { expect, test, describe, it } from 'vitest';
import calcCompoundInterest from "../utils/calccompoundinterest.ts";


describe('Function calcCompoundInterest', () => {

    test('standart input', () => {
        const initialDeposit = 100000;
        const addedMonthly = 5000;
        const interestRate = 9.3;
        const years = 20;

        const returned = calcCompoundInterest(initialDeposit, addedMonthly, interestRate, years);

        expect(returned.total).toBeCloseTo(4107358, 0);
        expect(returned.totalDeposit).toBe(1300000);
        expect(returned.totalInterest).toBeCloseTo(2807358, 0);
    });

    test('Should only return initialDeposit, interestRate = 0, years = 0', () => {
        const returned = calcCompoundInterest(1000, 500, 0, 0);
        expect(returned.total).toBe(1000);
        expect(returned.totalDeposit). toBe(1000);
        expect(returned.totalInterest).toBe(0);
    });

});
