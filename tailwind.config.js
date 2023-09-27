import saltCssVars from "./src/saltVariables.json";

function findKeysWith(str, obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (key.includes(str)) {
      const cleanedKey = key.replace(str, "").replace("--salt-", "");
      acc[cleanedKey] = value;
    }
    return acc;
  }, {});
}

const background = findKeysWith("-background", saltCssVars);
const borderColor = findKeysWith("-borderColor", saltCssVars);
const colors = findKeysWith("--salt-color-", saltCssVars);
const foreground = findKeysWith("-foreground", saltCssVars);
const boxShadow = findKeysWith("-shadow", saltCssVars);

console.log({
  background,
  colors,
});

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      padding: {
        "spacing-100": "var(--salt-spacing-100)",
        "spacing-25": "calc(0.25 * var(--salt-spacing-100))",
        "spacing-50": "calc(0.5 * var(--salt-spacing-100))",
        "spacing-75": "calc(0.75 * var(--salt-spacing-100))",
        "spacing-150": "calc(1.5 * var(--salt-spacing-100))",
        "spacing-200": "calc(2 * var(--salt-spacing-100))",
        "spacing-250": "calc(2.5 * var(--salt-spacing-100))",
        "spacing-300": "calc(3 * var(--salt-spacing-100))",
        "spacing-350": "calc(3.5 * var(--salt-spacing-100))",
        "spacing-400": "calc(4 * var(--salt-spacing-100))",
      },
      colors: {
        ...foreground,
      },
      backgroundColor: {
        ...background,
      },
      borderColor: {
        ...borderColor,
      },
      boxShadow: {
        ...boxShadow,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
