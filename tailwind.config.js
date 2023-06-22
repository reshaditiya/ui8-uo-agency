/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		colors: {
			white: "#ffffff",
			"light-gray": "#fafafa",
			red: "#be123c",
			cyan: {
				10: "#eaf6f9",
				30: "#c1e3ef",
				50: "#97d1e3",
				70: "#6dbfd9",
				90: "#44acce",
				100: "#2fa3c8",
			},
			purple: {
				10: "#e2e6f2",
				30: "#bec9ee",
				50: "#9aacea",
				70: "#778fe7",
				90: "#5372e3",
				100: "#4063e0",
			},
			black: {
				10: "#e6e9ec",
				30: "#b5bdc7",
				50: "#8490a1",
				70: "#53647b",
				90: "#213856",
				100: "#092243",
			},
			blue: {
				10: "#eaeff5",
				30: "#cedff6",
				50: "#a9caf7",
				70: "#7ab0f8",
				90: "#4291f8",
				100: "#1777f7",
			},
		},
		fontSize: {},
	},
}
