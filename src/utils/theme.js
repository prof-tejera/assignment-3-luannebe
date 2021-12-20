import { blue, green, red, neutral, violet, yellow } from "./colors";
import { primaryFont, displayFont } from "./typography";

export const theme = {
  primaryColor: blue[200],
  secondaryColor: blue[100],
  accentColor: violet[100],
  startColor: green[100],
  stopColor: red[200],
  resetColor: blue[300],
  pauseColor: yellow[100],
  disabledColor: neutral[250],
  neutralBackground: neutral[200],
  lightBackground: neutral[100],
  mediumBackground: blue[100],
  darkBackground: blue[500],

  lightTextColor: neutral[100],
  mediumTextColor: blue[400],
  darkTextColor: blue[500],

  dropShadow: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))",
  dropShadowOnHover: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))",

  hotGradient: `linear-gradient(115.87deg, ${yellow[100]} 0%, ${red[200]} 100% )`,
  coolGradient: `linear-gradient(115.87deg, ${violet[100]} 0%, ${blue[300]} 100% )`,

  primaryFont,
  displayFont,
};
