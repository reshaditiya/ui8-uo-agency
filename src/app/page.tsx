import Image from "next/image"

const collaborateCompanies = [
	{ name: "Alitalia", src: "/companies/alitalia.svg" },
	{ name: "Bally", src: "/companies/bally.svg" },
	{ name: "Aware", src: "/companies/aware.svg" },
	{ name: "Asuna", src: "/companies/asuna.svg" },
	{ name: "Vidkron", src: "/companies/vidkron.svg" },
]

export default function Home() {
	return (
		<>
			{/* title and image */}
			<div className="max-w-[77.5rem] mx-auto pt-[3.75rem] md:pt-[5rem] px-[1.5rem]">
				<div className="relative flex flex-col gap-[1rem] md:gap-[1.5rem] overflow-visible">
					{/* derocation */}
					<div className="absolute rounded-full border border-black-50 top-[-1.5rem] md:top-[-4rem] left-0 h-[1.2rem] w-[3.13rem] md:h-[3rem] md:w-[7.75rem]" />
					<div className="absolute rounded-full border border-black-50 right-0 bottom-[-1.5rem] h-[1rem] w-[2.5rem] md:h-[1.9rem] md:w-[4.06rem]" />
					{/* end decoration */}

					<h1 className="text-h1 max-w-[64.31rem]">
						We are a{" "}
						<span className="text-blue-100">digital agency</span>{" "}
						that will save your life.
					</h1>
					<span className="text-sm text-black-70 max-w-[41.69rem]">
						Lörem ipsum metavalens krisväska. Läsade infras. Uling
						vipp och gagyrtad. Donde beföskade polyamori är lavis.
						Prelasa esm, kropp sytes.
					</span>
				</div>
				<div className="mt-[4.63rem] md:mt-[4.19rem] relative h-[27.44rem] md:h-[39.25rem] w-fill">
					<Image
						src="/images/team1.webp"
						alt="Our Team"
						fill
						className="object-cover"
					/>
				</div>
			</div>

			{/* company collaboration */}
			<div className="max-w-[77.5rem] mx-auto flex flex-col gap-[1.5rem] md:gap-[3rem] py-[2rem] md:py-[6.88rem] mt-[0.5rem]">
				<p className="text-body text-center font-semibold text-black-50 px-[1.5rem]">
					We collaborate with{" "}
					<span className="text-blue-100">
						250+ leading companies
					</span>
				</p>
				<div className="flex flex-wrap justify-center">
					{collaborateCompanies.map((company) => (
						<div
							key={company.src}
							className="relative w-[8.63rem] h-[4rem] md:w-[15rem] md:h-[5rem]"
						>
							<Image src={company.src} alt={company.name} fill />
						</div>
					))}
				</div>
			</div>

			{/* we are passionate */}
			<div className="bg-light-gray">
				<div className="max-w-[77.5rem] mx-auto flex flex-col md:flex-row gap-[1.5rem] py-[2.5rem] md:py-[4.5rem] px-[1.5rem]">
					<h2 className="flex-1 text-h2">We are passionate.</h2>
					<p className="flex-1 text-body text-black-50">
						Overcoming expectations is our mission. We’re here to
						follow your vision and extend it into one consistent
						product. You got all according to our agreement, and
						some more.
						<br />
						<br />
						The process based on a customer-centric approach.
						Nowadays brand communication should be something that
						people really want to be involved in. Understanding and
						vibing your audience is what we’re here for.
						<br />
						<br />
						It may be not easy and time-consuming, but we don’t look
						for short ways. We’re lordly of our mission and it’s
						this attitude that defines us.
					</p>
				</div>

				{/* services */}
				<div>
					<div>
						<h2 className="text-h2">
							We provide the best service for you
						</h2>
						<p className="text-sm text-black-70">
							Lörem ipsum metavalens krisväska. Läsade infras.
							Uling vipp och gagyrtad. Donde beföskade polyamori
							är.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
