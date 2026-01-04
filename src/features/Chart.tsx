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
        notation: value > 1000000 ? "compact" : "standard",
    }).format(value);
};

export function CompoundInterestChart({ yearlyBreakDown }: ChartProps) {
    return (
        <div style={{ width: '100%', height: 350, }}>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Vývoj v čase</h3>
                <div className="flex gap-4 text-xs font-medium">
                    <div className="flex items-center gap-1.5 text-slate-500">
                        <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                        Vklad
                    </div>
                    <div className="flex items-center gap-1.5 text-teal-600">
                        <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                        Úrok
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={yearlyBreakDown}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    barSize={12} // Užší sloupce pro elegantnější vzhled
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />

                    <XAxis
                        height={65}
                        dataKey="year"
                        axisLine={false}
                        tickLine={false}
                        tick={{fill: '#94a3b8', fontSize: 12}}
                        dy={10}
                    />

                    <YAxis
                        width={65}
                        tickFormatter={(value) => formatCurrency(value)}
                        axisLine={false}
                        tickLine={false}
                        tick={{fill: '#94a3b8', fontSize: 12}}
                    />

                    <Tooltip
                        cursor={{fill: '#f1f5f9'}}
                        contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            borderRadius: '12px',
                            border: 'none',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            padding: '12px'
                        }}
                        itemStyle={{ fontSize: '13px', fontWeight: 500 }}
                        formatter={(value) => new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(value as number)}
                        labelStyle={{ color: '#64748b', marginBottom: '8px', fontSize: '12px' }}
                    />

                    {/* Skrytá defaultní legenda, protože máme vlastní nahoře */}
                    <Legend content={() => null} />

                    <Bar
                        dataKey="totalDeposit"
                        stackId="a"
                        name="Vložená částka"
                        fill="#cbd5e1" // Slate-300
                        radius={[0, 0, 0, 0]}
                    />
                    <Bar
                        dataKey="totalInterest"
                        stackId="a"
                        name="Získaný úrok"
                        fill="#14b8a6" // Teal-500
                        radius={[4, 4, 0, 0]} // Zaoblení jen nahoře
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
