/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Emerald + White palette
        bg: '#F8FBF9',              // page background, a hair off-white with a green tint
        surface: '#FFFFFF',
        forest: '#053B33',          // primary dark green (dark sections, headings)
        'forest-light': '#075E4D',  // hover state for forest surfaces
        'forest-deep': '#042F29',   // footer, one step below forest
        brand: '#047857',           // primary emerald: buttons, links, active states
        'brand-dark': '#065F46',    // hover state for brand
        accent: '#10B981',          // bright emerald: highlights on dark, glows
        mint: '#D1FAE5',            // soft mint
        'mint-soft': '#ECFDF5',     // light green background
        text: '#111827',
        muted: '#6B7280',
        border: '#E2EDE8',          // green-tinted hairline
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-desktop': ['64px', { lineHeight: '1.08', fontWeight: '800' }],
        'hero-mobile': ['40px', { lineHeight: '1.1', fontWeight: '800' }],
        'section-desktop': ['48px', { lineHeight: '1.15', fontWeight: '700' }],
        'section-mobile': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
