# Investiční Kalkulačka

Moderní webová aplikace pro výpočet složeného úročení s vizualizací v čase. Aplikace umožňuje uživatelům modelovat vývoj jejich investic na základě počátečního vkladu, měsíčních úložek a předpokládaného úroku.

![App Screenshot](./public/app.png)

##  Live Demo
👉 **[Investiční kalkulačka)](https://kalkulackainvestic.netlify.app/)**
## Použité Technologie
Tento projekt je postaven na moderním Reactu s důrazem na typovou bezpečnost a čisté UI.

* **Core:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (CSS & Layout vytvořeno AI, dělal jsem pouze menší úpravy)
* **Vizualizace:** [Recharts](https://recharts.org/) (pro grafy vývoje úroků)
* **Testování:** [Vitest](https://vitest.dev/) (Unit testy výpočetní logiky)

  ![Test Screenshot](./public/test.png)

## Klíčové Vlastnosti

* **Okamžitý výpočet:** Reaktivní formulář, který přepočítává výsledky v reálném čase.
* **Interaktivní grafy:** Sloupcový graf zobrazující poměr vkladu vs. získaného úroku v čase.
* **Responzivní design:** Plně optimalizováno pro mobily i desktop (využívá Tailwind grid a flexbox).
* **Formátování měny:** Automatické formátování českých korun (CZK) a velkých čísel.
* **Unit Testy:** Výpočetní logika (`calculateCompoundInterest`) je pokryta automatickými testy.

📂 Struktura projektu
Architektura je rozdělena podle funkcionality pro lepší škálovatelnost.

```
src/
├── features/       # Komplexní celky (Formulář, Graf)
├── components/     # UI primitivy (Button, Input)
├── utils/          # Čisté funkce pro výpočty
├── test/           # Testy
├── App.tsx/        # Wrapper pro Main.tsx
└── Main.tsx/       # Co nejkratší
```
