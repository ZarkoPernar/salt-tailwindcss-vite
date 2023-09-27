import saltCssVars from "./src/saltVariables.json" assert { type: "json" };

function findKeysWith(str, obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (key.includes(str)) {
      const cleanedKey = key.replace("--salt-", "").replace(str, "");
      acc[cleanedKey] = value;
    }
    return acc;
  }, {});
}

const backgrounds = findKeysWith("-background", saltCssVars);
const colors = findKeysWith("--salt-color-", saltCssVars);

console.log({
  backgrounds,
  colors,
});
