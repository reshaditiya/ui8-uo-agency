type Works = {
	name: string
	shortDesc: string
	longDesc: string
	imageSrc: string
}

const works: Works[] = [
	{
		name: "My Health",
		shortDesc: "Healthcare solution platform.",
		longDesc: "Impressive Experience For A Wellness Platform.",
		imageSrc: "/works/my-health.webp",
	},
	{
		name: "Da Riil Estat´",
		shortDesc: "Modern real estate platform.",
		longDesc:
			"A brand new real estate listing website for on of the most renowned brokers in the south of Spain.",
		imageSrc: "/works/da-riil-estat.webp",
	},
	{
		name: "NFT Generator",
		shortDesc: "Artificifial Intellegence website for NFT.",
		longDesc: "Makes it easy for creators to create NFT assets.",
		imageSrc: "/works/nft-generator.webp",
	},
	{
		name: "Royal Garden",
		shortDesc: "For the community of plant lovers.",
		longDesc: "Grow a beautiful green garden and save the planet.",
		imageSrc: "/works/royal-garden.webp",
	},
]

export default works
