export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        bg2: "var(--bg2)",
        bg3: "var(--bg3)",
        bg4: "var(--bg4)",
        bg5: "var(--bg5)",

        border: "var(--border)",
        border2: "var(--border2)",

        text: "var(--text)",
        text2: "var(--text2)",
        text3: "var(--text3)",

        accent: "var(--accent)",
        "accent-dim": "var(--accent-dim)",
        "accent-glow": "var(--accent-glow)",

        red: "var(--red)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
        green: "var(--green)",
        purple: "var(--purple)",
        pink: "var(--pink)",
        blue: "var(--blue)",
        testcolor: "#ff00ff",
      },

      spacing: {
        sidebar: "var(--sidebar-w)", // use: w-sidebar
      },

      fontFamily: {
        syne: ["Syne", "sans-serif"],
        jet: ["JetBrains Mono", "monospace"],
      },
    },
  },
};
