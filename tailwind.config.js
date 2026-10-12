/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8FAFC',
        surface: '#FFFFFF',
        navy: '#0B1F3A',
        'navy-light': '#112847',
        text: '#0F172A',
        muted: '#64748B',
        blue: '#2563EB',
        'soft-blue': '#EFF6FF',
        border: '#E2E8F0',
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
