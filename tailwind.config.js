/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-', // Ensures classes are prefixed
	important: false, // Adjust based on project needs
	content: [
	  "./index.html",
	  "./js", // Includes all JS files in the 'js' folder
	],
	theme: {
	  extend: {
		colors: {
		  primary: '#094c3b',
		  secondary: '#ffe353',
		},
	  },
	},
	plugins: [],
  };
  
