
export interface BtnProps{
    label: string
    type?: "button" | "submit" | "reset";
    onClick: () => void;
}

export default function Button({label, type = "button", onClick}: BtnProps) {
    const isSubmit = type === "submit";

    return (
        <button
            key={label}
            className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all active:scale-[0.98] 
                ${isSubmit
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
            type={type}
            onClick={onClick}
        >{label}</button>
    )
}