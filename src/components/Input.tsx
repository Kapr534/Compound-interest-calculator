
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
        <div className="group">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block group-focus-within:text-teal-600 transition-colors">
                {label}
            </label>
            <div className="relative flex items-center">
                <input
                    className="w-full pl-4 pr-16 py-3.5 bg-white border border-slate-200 rounded-xl
                           text-slate-900 font-semibold outline-none
                            focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10
                            transition-all duration-200 shadow-sm group-hover:border-slate-300"

                    type="text"
                    value={formattedValue}

                    onChange={(e) => {
                        const rawValue = e.target.value.replace(/\s/g, "");

                        if (rawValue === "") {
                            onInputChange(name, 0);
                        } else {
                            let num = Number(rawValue);
                            if (num > maxValue) num = maxValue;
                            if (!isNaN(num)) onInputChange(name, num);
                        }
                    }}
                />
                {/* Stylovaná jednotka vpravo */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-100 text-slate-500 font-bold text-xs py-1.5 px-2.5 rounded-lg pointer-events-none select-none">
                    {unit}
                </div>
            </div>
        </div>
    )
}