import React from 'react';
import Button from "../components/Button.tsx";
import type {BtnProps} from "../components/Button.tsx";
import Input from "../components/Input.tsx";
import type {InputProps} from "../components/Input.tsx";
import '../styles/calculatorform.css'

interface CalculatorFormProps {
    onSubmitBtnClick: () => void;
    onClearBtnClick: () => void;
    onInputChange: (name: string, value: number) => void;
    inputValues: {
        deposit: number;
        monthlyAdded: number;
        interestRate: number;
        years: number;
    };
}



export default function CalculatorForm(props: CalculatorFormProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmitBtnClick();
    }

    const inputs: InputProps[] = [
        {value: props.inputValues.deposit,name: "deposit", maxValue: 100000000,unit: "Kč", label: "Počáteční jednorázová investice", onInputChange: props.onInputChange},
        {value: props.inputValues.monthlyAdded,name: "monthlyAdded", maxValue: 10000000,unit: "Kč", label: "Pravidelná měsíční investice", onInputChange: props.onInputChange},
        {value: props.inputValues.interestRate,name: "interestRate", maxValue: 100,unit: "% p.a.", label: "Předpokládaná roční úroková sazba (%)", onInputChange: props.onInputChange},
        {value: props.inputValues.years,name: "years", maxValue: 100,unit: "let", label: "Na kolik let", onInputChange: props.onInputChange},
    ];

    const btns: BtnProps[] = [
        {label: "Spočítat", type: "submit", onClick: () => {}},
        {label: "Vyčistit", type: "button", onClick: props.onClearBtnClick},
    ];



    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="space-y-5">
                {inputs.map(input => <Input key={input.name} {...input}/>)}
            </div>
            <div className="flex flex-col gap-3 mt-4">
                {btns.map(btn => <Button key={btn.label} {...btn} />)}
            </div>
        </form>
    )
}