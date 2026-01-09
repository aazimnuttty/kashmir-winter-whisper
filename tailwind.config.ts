import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cta: {
          primary: "hsl(var(--cta-primary))",
          "primary-foreground": "hsl(var(--cta-primary-foreground))",
          secondary: "hsl(var(--cta-secondary))",
          "secondary-foreground": "hsl(var(--cta-secondary-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        winter: {
          snow: "hsl(0, 0%, 98%)",
          ice: "hsl(200, 30%, 96%)",
          frost: "hsl(210, 25%, 92%)",
          pine: "hsl(160, 35%, 35%)",
          sky: "hsl(200, 65%, 45%)",
          mist: "hsl(210, 20%, 85%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        snowfall: {
          "0%": { transform: "translateY(-10vh) translateX(0)", opacity: "1" },
          "100%": { transform: "translateY(110vh) translateX(20px)", opacity: "0.3" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        snowfall: "snowfall linear infinite",
      },
      backgroundImage: {
        "gradient-frost": "linear-gradient(135deg, hsl(200 25% 97%) 0%, hsl(210 30% 94%) 50%, hsl(200 20% 92%) 100%)",
        "gradient-ice": "linear-gradient(180deg, hsl(200 30% 96%) 0%, hsl(210 25% 98%) 100%)",
        "gradient-hero-overlay": "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
      },
      boxShadow: {
        frost: "0 4px 20px -2px hsla(210, 30%, 40%, 0.08), 0 2px 8px -2px hsla(210, 30%, 40%, 0.04)",
        "frost-lg": "0 8px 40px -4px hsla(210, 30%, 40%, 0.12), 0 4px 16px -4px hsla(210, 30%, 40%, 0.06)",
        glow: "0 0 30px hsla(200, 65%, 45%, 0.15)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
