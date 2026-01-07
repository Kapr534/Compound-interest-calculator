# Investiční Kalkulačka

Moderní webová aplikace pro výpočet složeného úročení s vizualizací v čase. Aplikace umožňuje uživatelům modelovat vývoj jejich investic na základě počátečního vkladu, měsíčních úložek a předpokládaného úroku.

![App Screenshot](./public/app.png)

##  Live Demo
👉 **[Investiční kalkulačka)]([https://kalkulackainvestic.netlify.app/](https://investicni-kalkulacka.vercel.app/)**
## Použité Technologie
Tento projekt je postaven na moderním Reactu s důrazem na typovou bezpečnost a čisté UI.

* **Core:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (CSS & Layout vytvořilo AI, dělal jsem pouze menší úpravy)
* **Vizualizace:** [Recharts](https://recharts.org/) (pro grafy vývoje úroků)
* **Testování:** [Vitest](https://vitest.dev/) (Unit testy výpočetní logiky)

  ![Test Screenshot](./public/test.png)

📂 Struktura projektu
Architektura je rozdělena podle funkcionality pro lepší škálovatelnost.

```
src/
├── features/       # Komplexní celky (Formulář, Graf)
├── components/     # UI primitivy (Button, Input)
├── utils/          # Čisté funkce pro výpočty
├── test/           # Testy
├── App.tsx         # Wrapper pro Main.tsx
└── Main.tsx        # Co nejkratší
```
