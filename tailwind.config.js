module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            display: ['hover', 'group-hover'],
            borderWidth: ['hover', 'group-hover'],
            textColor: ['disabled'],
            opacity: ['hover', 'group-hover'],
            cursor: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
