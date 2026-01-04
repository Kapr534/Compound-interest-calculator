import {useState} from 'react'
import './styles/app.css'
import CalculatorForm from "./features/CalculatorForm.tsx";
import { calcCompoundInterest } from "./utils/calccompoundinterest.ts";
import { CompoundInterestChart } from './features/Chart.tsx';
import type { YearlyBreakDownData } from './features/Chart.tsx'

export default function App() {
    const [inputValues, setInputValues] = useState({
        deposit: 0,
        monthlyAdded: 0,
        interestRate: 0,
        years: 0,
    })
    const [calcValues, setCalcValues] = useState({
        total: 0,
        totalDeposit: 0,
        totalInterest: 0,
        yearlyBreakDown: [] as YearlyBreakDownData[],
    })

    const onInputChange = (name: string, value: number) => {
        setInputValues({...inputValues, [name]: value});
    }

    const onSubmitBtnClick = () => {
        const newCalcValues = calcCompoundInterest(
            inputValues.deposit,
            inputValues.monthlyAdded,
            inputValues.interestRate,
            inputValues.years);
        setCalcValues(newCalcValues);
    };

    const onClearBtnClick = () => {
        setInputValues({deposit: 0, monthlyAdded: 0, interestRate: 0, years: 0})
        setCalcValues({total: 0, totalDeposit: 0,totalInterest: 0, yearlyBreakDown: []})
    };


    return (
        <main className=" /* Overflow */
        w-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 md:p-8 antialiased font-sans
        /* Phones */
        min-h-screen h-auto
        /* DESKTOP */
        md:h-screen md:overflow-hidden">
            <div className="max-w-6xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 overflow-hidden border border-white/50 grid lg:grid-cols-12 relative">

                {/* Left side - Form */}
                <section className="lg:col-span-5 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-slate-100 bg-white z-10">
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-50 text-teal-600 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Investiční kalkulačka</h1>
                        <p className="text-slate-500 mt-3 text-sm leading-relaxed">
                            Zadejte parametry své investice a zjistěte, jak může složené úročení zhodnotit vaše úspory v čase.
                        </p>
                    </div>

                    <CalculatorForm
                        onSubmitBtnClick={onSubmitBtnClick}
                        onClearBtnClick={onClearBtnClick}
                        onInputChange={onInputChange}
                        inputValues={inputValues}
                    />
                </section>

                {/* Right side - Results */}
                <output className="lg:col-span-7 p-8 md:p-10 bg-slate-50/80 flex flex-col relative">

                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                    <div className="space-y-8 relative z-10">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2rem] text-white shadow-xl shadow-slate-200 border border-slate-700/50 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <h3 className="text-slate-300 text-xs font-bold uppercase tracking-widest mb-1">Budoucí hodnota investice</h3>
                            <div className="flex items-baseline gap-2 mt-2">
                                <div className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                                    {calcValues.total.toLocaleString('cs-CZ')}
                                </div>
                                <span className="text-xl font-medium text-slate-400">Kč</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                                <span className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                                    Celkem vloženo
                                </span>
                                <span className="text-slate-900 font-bold text-xl tracking-tight block">
                                    {calcValues.totalDeposit.toLocaleString('cs-CZ')} <span className="text-sm font-normal text-slate-400">Kč</span>
                                </span>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-teal-50 rounded-bl-full -mr-8 -mt-8 z-0"></div>
                                <span className="flex items-center gap-2 text-teal-600/70 text-[10px] font-bold uppercase tracking-widest mb-2 relative z-10">
                                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                                    Čistý zisk (Úrok)
                                </span>
                                <span className="text-teal-600 font-bold text-xl tracking-tight block relative z-10">
                                    +{calcValues.totalInterest.toLocaleString('cs-CZ')} <span className="text-sm font-normal text-teal-600/60">Kč</span>
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-200/60 relative z-10">
                            <CompoundInterestChart yearlyBreakDown={calcValues.yearlyBreakDown}/>
                        </div>
                    </div>
                </output>

            </div>
        </main>
    )
}
