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
			<div className="pt-[3.75rem] md:pt-[5rem] px-6">
				<div className="relative flex flex-col gap-4 md:gap-6 overflow-visible">
					{/* derocation */}
					<div className="absolute rounded-full border border-black-50 top-[-1.5rem] md:top-[-4rem] left-0 h-[1.2rem] w-[3.13rem] md:h-[3rem] md:w-[7.75rem]" />
					<div className="absolute rounded-full border border-black-50 right-0 bottom-[-1.5rem] h-[1rem] w-[2.5rem] md:h-[1.9rem] md:w-[4.06rem]" />

					<h1 className="text-lg md:text-5xl font-bold max-w-5xl">
						We are a{" "}
						<span className="text-blue-100">digital agency</span>{" "}
						that will save your life.
					</h1>
					<span className="text-xs md:text-base text-black-70 max-w-[41.69rem]">
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
			<div className="flex flex-col gap-[1.5rem] md:gap-[3rem] py-[2rem] md:py-[6.88rem] mt-[2.5rem]">
				<p className="text-sm md:text-lg text-center font-semibold text-black-50 px-[1.5rem]">
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
		</>
	)
}
