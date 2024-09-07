module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Paths to your content files
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInSlow: "fadeIn 2s ease-in-out",
      },
      colors: {
        // New Theme Colors (sleek, modern, professional)
        background: "#121212", // Dark black-grey for a deep, immersive background
        surface: "#1f1f1f", // Slightly lighter black for surface elements (cards, nav)
        accent: "#ff6f61", // Soft coral red for accents to stand out
        neonGreen: "#1db954", // Spotify Green for modern, pop effects
        textPrimary: "#e0e0e0", // Softer white for primary text
        textSecondary: "#b3b3b3", // Softer grey for secondary text
        border: "#2e2e2e", // Soft border color for components
        hover: "#292929", // Subtle hover color for interactive elements
        highlight: "#ffea00", // Bright yellow for pop highlights
      },
      fontFamily: {
        // Sleek fonts for a professional look
        code: ["Source Code Pro", "monospace"], // Clean code-style font for headings and snippets
        body: ["Roboto", "sans-serif"], // Modern and readable body font
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      boxShadow: {
        // Elegant shadow with a soft neon glow
        neon: "0 0 10px #ff6f61, 0 0 20px #ff6f61, 0 0 30px #ff6f61",
        neonGreen: "0 0 10px #1db954, 0 0 20px #1db954, 0 0 30px #1db954",
      },
      backgroundImage: {
        // Adding a subtle gradient option for backgrounds
        "gradient-to-b": "linear-gradient(to bottom, #121212, #1f1f1f)",
      },
    },
  },
  plugins: [],
};
