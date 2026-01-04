import {useState} from 'react'
import './styles/app.css'
import CalculatorForm from "./features/CalculatorForm.tsx";
import { calcCompoundInterest } from "./utils/calccompoundinterest.ts";

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
        totalInterest: 0
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
        setCalcValues({total: 0, totalDeposit: 0,totalInterest: 0})
    };


    return (
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 antialiased">
            <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100 grid md:grid-cols-2">

                {/* Left side - Form */}
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
                    <div className="mb-10">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Investiční kalkulačka</h1>
                        <p className="text-slate-500 mt-2 font-medium">Naplánujte si svou finanční budoucnost.</p>
                    </div>

                    <CalculatorForm
                        onSubmitBtnClick={onSubmitBtnClick}
                        onClearBtnClick={onClearBtnClick}
                        onInputChange={onInputChange}
                        inputValues={inputValues}
                    />
                </div>

                {/* Right side - Results */}
                <div className="p-8 md:p-12 bg-slate-50/50 flex flex-col justify-center">
                    <div className="space-y-8">
                        <div className="bg-indigo-600 p-8 rounded-[2rem] text-white shadow-xl shadow-indigo-200">
                            <h3 className="text-indigo-200 text-sm font-bold uppercase tracking-widest mb-2">Budoucí hodnota</h3>
                            <div className="text-5xl font-black tracking-tighter">
                                {calcValues.total.toLocaleString('cs-CZ')} <span className="text-2xl font-normal text-indigo-300">Kč</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 px-4">
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Celkem vloženo</span>
                                <span className="text-slate-900 font-bold text-lg">{calcValues.totalDeposit.toLocaleString('cs-CZ')} Kč</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Čistý zisk</span>
                                <span className="text-green-600 font-bold text-lg">+{calcValues.totalInterest.toLocaleString('cs-CZ')} Kč</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
