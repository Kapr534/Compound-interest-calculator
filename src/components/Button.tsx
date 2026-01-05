
export interface BtnProps{
    label: string
    type?: "button" | "submit" | "reset";
    onClick: () => void;
}

export default function Button({label, type = "button", onClick}: BtnProps) {
    const isSubmit = type === "submit";

    return (
        <button
            className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-200 transform active:scale-[0.98] 
                ${isSubmit
                ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/30"
                : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50 hover:text-slate-700 hover:border-slate-300"}`}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    )
}