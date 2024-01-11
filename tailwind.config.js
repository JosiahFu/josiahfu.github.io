import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                banner: "url('/banner.png')",
                'geometric-down': "url('/gradient1.png')",
                'geometric-right': "url('/gradient2.png')",
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
