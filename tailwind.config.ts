import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'selector',
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
				display: ['var(--font-gmarket)', 'system-ui', 'sans-serif'],
			},
			colors: {
				// Warm Grey Palette for Portfolio
				stone: {
					850: '#1c1917',
					900: '#0c0a09',
					950: '#040302',
				},
				// Warm Red / Deep Orange Accent (Coral)
				accent: {
					200: '#ffccbc',
					300: '#ffab91',
					400: '#ff7043',
					500: '#ff5722',
					900: '#bf360c',
				},
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'slide-up': 'slideUp 0.5s ease-out forwards',
				'glow': 'glow 2s ease-in-out infinite alternate',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				glow: {
					'0%': { opacity: '0.5' },
					'100%': { opacity: '1' },
				},
			},
		},
	},
};

export default config;
