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
        {value: props.inputValues.deposit,name: "deposit",placeholder: "Kč", label: "Počáteční jednorázová investice", onInputChange: props.onInputChange},
        {value: props.inputValues.monthlyAdded,name: "monthlyAdded",placeholder: "Kč", label: "Pravidelná měsíční investice", onInputChange: props.onInputChange},
        {value: props.inputValues.interestRate,name: "interestRate",placeholder: "% pa", label: "Předpokládaná roční úroková sazba (%)", onInputChange: props.onInputChange},
        {value: props.inputValues.years,name: "years",placeholder: "let", label: "Na kolik let", onInputChange: props.onInputChange},
    ];

    const btns: BtnProps[] = [
        {label: "Spočítat", type: "submit", onClick: () => {}},
        {label: "Vyčistit", type: "button", onClick: props.onClearBtnClick},
    ];



    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="space-y-5">
                {inputs.map(item => <Input key={item.name} {...item}/>)}
            </div>
            <div className="flex flex-col gap-3 mt-4">
                {btns.map(btn => <Button key={btn.label} {...btn} />)}
            </div>
        </form>
    )
}