# Irfanul Hoque - Developer Portfolio

A modern, responsive developer portfolio built with React, Vite, and Tailwind CSS. Features a sleek **Dark Slate & Sky Blue** theme with glassmorphism effects and smooth Framer Motion animations.

## 🚀 Features

-   **Dark Aesthetics**: Deep `slate-950` background with a vibrant `sky-400` accent.
-   **Glassmorphism**: Modern frosted glass effects on cards and navigation.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
-   **Smooth Animations**: Intersection observers and hover effects powered by Framer Motion.
-   **Dynamic Background**: Subtle, animated ambient gradients.

## 🛠️ Tech Stack

-   **Frontend**: [React](https://react.dev/) (v18+)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The app will run at `http://localhost:5173`.

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/     # React components (Hero, About, Projects, etc.)
├── data/          # Static data files (projects.js, skills.js, etc.)
├── utils/         # Helper functions and animation variants
├── App.jsx        # Main application component
├── index.css      # Global styles and Tailwind directives
└── main.jsx       # Entry point
```

## 🎨 Customization

### Changing Content
Edit the files in `src/data/` to update your portfolio information:
-   `projects.js`: Update your project list.
-   `experience.js`: Update work history and education.
-   `skills.js`: Update your technical skills.

### Changing Colors
1.  Open `tailwind.config.js`.
2.  Modify the `colors` object:
    -   `dark` / `navy`: Change the background shades.
    -   `accent`: Change the primary highlight color (currently Sky Blue `#38bdf8`).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
