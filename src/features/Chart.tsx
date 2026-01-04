// import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';


export interface YearlyBreakDownData {
    year: number;
    totalDeposit: number;
    totalInterest: number;
}

interface ChartProps{
    yearlyBreakDown: YearlyBreakDownData[];
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('cs-CZ', {
        style: 'currency',
        currency: 'CZK',
        maximumFractionDigits: 0,
    }).format(value);
};

export function CompoundInterestChart({ yearlyBreakDown }: ChartProps) {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <h3>Vývoj investice (Vklad vs. Úrok)</h3>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={yearlyBreakDown}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="year" />

                    <YAxis tickFormatter={(value) => formatCurrency(value)} />

                    <Tooltip
                        formatter={(value) => formatCurrency(value as number)}
                        labelStyle={{ color: 'black' }}
                    />

                    <Legend />

                    <Bar
                        dataKey="totalDeposit"
                        stackId="a"
                        name="Vložená částka"
                        fill="#8884d8"
                    />
                    <Bar
                        dataKey="totalInterest"
                        stackId="a"
                        name="Získaný úrok"
                        fill="#82ca9d"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
