export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Glassmorphism color system
        'glass-dark-primary': '#071A2B',
        'glass-dark-secondary': '#0B2638',
        'glass-teal': '#0EA5A8',
        'glass-cyan': '#38BDF8',
        'glass-green': '#A7D948',
        'glass-white': '#FFFFFF',
        'glass-text-primary': 'rgba(255, 255, 255, 0.92)',
        'glass-text-secondary': 'rgba(255, 255, 255, 0.72)',
        'glass-text-muted': 'rgba(255, 255, 255, 0.52)',
        'glass-border': 'rgba(255, 255, 255, 0.10)',
        'glass-border-active': 'rgba(56, 189, 248, 0.35)',
      },
      backgroundColor: {
        'glass-1': 'rgba(255, 255, 255, 0.08)',
        'glass-2': 'rgba(255, 255, 255, 0.06)',
        'glass-3': 'rgba(255, 255, 255, 0.04)',
      },
      backdropBlur: {
        glass: '18px',
        'glass-light': '12px',
      },
      boxShadow: {
        'glass-sm': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-md': '0 8px 32px rgba(0, 0, 0, 0.15)',
        'glass-lg': '0 20px 64px rgba(0, 0, 0, 0.2)',
      },
      borderColor: {
        glass: 'rgba(255, 255, 255, 0.10)',
        'glass-active': 'rgba(56, 189, 248, 0.35)',
      },
    },
  },
  plugins: [],
};
