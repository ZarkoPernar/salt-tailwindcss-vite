import saltCssVars from "./src/saltVariables";

const replaceSalt = (key) => key.replace("--salt-", "");

const replaceKeyAndSalt = (key, str) =>
  key.replace(str, "").replace("--salt-", "");

function findKeysWith(str, obj, cleanKey = replaceKeyAndSalt) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (key.includes(str)) {
      const cleanedKey = cleanKey(key, str);
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
const saltSpacing = findKeysWith("-spacing", saltCssVars, replaceSalt);

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      padding: {
        ...saltSpacing,
      },
      margin: {
        ...saltSpacing,
      },
      gap: {
        ...saltSpacing,
      },
      inset: {
        ...saltSpacing,
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
};
