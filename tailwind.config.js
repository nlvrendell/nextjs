/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				'custom-gray': '#333333',

				// For font
				'primary' : '#FFFFFF',
				'secondary' : '#CCCCCC',
	
			},
			fontFamily: {
				inter: ['"Inter"', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				sm: ['14px', '20px'],
				base: ['16px', '24px'],
				lg: ['20px', '28px'],
				xl: ['100px'],
			  }
		},
	},
	plugins: [
        require('flowbite/plugin')
    ]
}
