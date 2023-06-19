import Image from "next/image"

export default function Home() {
	return (
		<>
			<div className="px-6">
				<div>
					<h1 className="text-7xl font-bold">
						We are an{" "}
						<span className="text-primary">digital agency</span>{" "}
						that will save your life.
					</h1>
					<span>
						Lörem ipsum metavalens krisväska. Läsade infras. Uling
						vipp och gagyrtad. Donde beföskade polyamori är lavis.
						Prelasa esm, kropp sytes.{" "}
					</span>
				</div>
				<div className="relative h-[439px] md:h-[628px] w-fill">
					<Image
						src="/images/team1.webp"
						alt="Our Team"
						fill
						className="object-cover"
					/>
				</div>
				<p>We collaborate with 250+ leading companies</p>
			</div>
		</>
	)
}
