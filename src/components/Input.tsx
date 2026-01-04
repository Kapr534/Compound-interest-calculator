
export interface InputProps{
    value: number
    maxValue: number;
    name: string;
    unit: string;
    label: string;
    onInputChange: (name: string, value: number) => void;
}

export default function Input({value, maxValue,name, unit, label, onInputChange}: InputProps) {
    const formattedValue = value ? value.toLocaleString('cs-CZ') : (value === 0 ? "0" : "");

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700 ml-1">
                {label}
            </label>
            <div className="relative">
                <input
                    className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-2xl
                           text-slate-900 outline-none
                            focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10
                            transition-all duration-200 shadow-sm"

                    type="text"
                    value={formattedValue}

                    onChange={(e) => {
                        const rawValue = e.target.value.replace(/\s/g, "");    //remove " "

                        if (rawValue === "") {
                            onInputChange(name, 0);
                        } else {
                            let num = Number(rawValue);
                            if (num > maxValue) num = maxValue;
                            if (!isNaN(num)) onInputChange(name, num);
                        }

                    }}
                    />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium pointer-events-none">
                    {unit}
                </span>
            </div>
        </div>
    )
}