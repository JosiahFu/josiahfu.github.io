import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                // Paths must be relative to index.css
                banner: "url('./assets/banner.png')",
                'geometric-down': "url('./assets/gradient1.png')",
                'geometric-right': "url('./assets/gradient2.png')",
            },
            colors: {
                'spring-green': {
                    50: '#eefff5',
                    100: '#d8ffea',
                    200: '#b3ffd5',
                    300: '#78fdb5',
                    400: '#2af186',
                    500: '#0cdb6c',
                    600: '#03b656',
                    700: '#078e46',
                    800: '#0b703b',
                    900: '#0c5b33',
                    950: '#00331a',
                },
            },
            spacing: {
                '2px': '2px',
            },
            borderWidth: {
                '2px': '2px',
            },
            fontFamily: {
                sans: ['Raleway', ...defaultTheme.fontFamily.sans],
            },
            rotate: {
                135: '135deg',
            },
        },
    },
    plugins: [],
};
