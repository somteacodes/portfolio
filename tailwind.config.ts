const { withMaterialColors } = require("tailwind-material-colors");
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
module.exports = withMaterialColors(
  config,
  {
    // Your base colors as HEX values. 'primary' is required.
    primary: "#006E2C",
    // secondary and/or tertiary are optional, if not set they will be derived from the primary color.
    // secondary: '#ffff00',
    // tertiary: '#0000ff',
    // add any named colors you need:
  },
  {
    /* one of 'content', 'expressive', 'fidelity', 'monochrome', 'neutral', 'tonalSpot' or 'vibrant' */
    scheme: "tonalSpot",
    // contrast is optional and ranges from -1 (less contrast) to 1 (more contrast).
    contrast: 0,
  }
);
