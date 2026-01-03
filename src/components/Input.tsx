
export interface InputProps{
    value: number
    name: string;
    type?: string;
    placeholder: string;
    label: string;
    onInputChange: (name: string, value: number) => void;
}

export default function Input({value, name, type = "number", placeholder, label, onInputChange}: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label>
                {label}
            </label>
            <input
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl
                       text-slate-900 placeholder:text-slate-400 outline-none
                        focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10
                        transition-all duration-200 shadow-sm"
                type={type}
                value={value || ""}
                placeholder={placeholder}
                onChange={(e) => {
                    const numberValue = Number(e.target.value);
                    onInputChange(name, numberValue)
                }}
                />
        </div>
    )
}