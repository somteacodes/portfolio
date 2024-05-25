const { withMaterialColors } = require('tailwind-material-colors');
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
module.exports = withMaterialColors(config, {
  // Your base colors as HEX values. 'primary' is required.
  primary: '#ff0000',
  // secondary and/or tertiary are optional, if not set they will be derived from the primary color.
  secondary: '#ffff00',
  tertiary: '#0000ff',
  // add any named colors you need:
  green: '#00ff00',
  blue: '#0000ff'
  },
  {
  /* one of 'content', 'expressive', 'fidelity', 'monochrome', 'neutral', 'tonalSpot' or 'vibrant' */
  scheme: 'content',
  // contrast is optional and ranges from -1 (less contrast) to 1 (more contrast).
  contrast: 0,
  });