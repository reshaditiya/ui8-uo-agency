import Image from "next/image"

export default function page() {
	return (
		<>
			{/* title section */}
			<section className="bg-black-100 px-[1.5rem] pb-[1.5rem] pt-[3.75rem] md:pb-[6.25rem] md:pt-[5rem]">
				<div className="mx-auto flex max-w-[77.5rem] flex-col gap-[3.13rem] md:gap-[4.19rem]">
					<div className="flex flex-col gap-[1rem] md:gap-[1.5rem]">
						<h1 className="text-h1 max-w-[64.31rem] text-white">
							Creating digital product excellence
						</h1>
						<p className="text-sm max-w-[41.69rem] text-white">
							Lörem ipsum metavalens krisväska. Läsade infras.
							Uling vipp och gagyrtad. Donde beföskade polyamori
							är lavis. Prelasa esm, kropp sytes.
						</p>
					</div>
					<div className="flex flex-col gap-[1.5rem] md:flex-row">
						<figure className="w-fill relative h-[27.44rem] md:w-4/12">
							<Image
								key="1"
								src="/images/team-work.webp"
								alt="Team Work"
								fill
								className="object-cover"
							/>
						</figure>
						<figure className="w-fill relative h-[27.44rem] md:w-8/12">
							<Image
								key="2"
								src="/images/team2.webp"
								alt="Our Team"
								fill
								className="object-cover"
							/>
						</figure>
					</div>
				</div>
			</section>

			{/* simplicity section */}
			<section className="mx-auto mt-[0.63rem] flex max-w-[77.5rem] flex-col gap-[4rem] px-[1.5rem] py-[4.5rem] md:mt-0 md:flex-row md:items-start md:py-[6.88rem]">
				<div className="flex flex-col gap-[1rem] md:flex-1 md:gap-[2rem]">
					<h2 className="text-h2">Simplicity</h2>
					<p className="text-body text-black-50">
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
					</p>
				</div>
				<figure className="relative h-[26.94rem] md:h-[42.19rem] md:flex-1">
					<Image
						src="/images/simple.webp"
						alt="Abstract Art"
						fill
						className="object-cover"
					/>
				</figure>
			</section>

			{/* stats section */}
			<section className="mx-auto mb-[3.06rem] mt-[0.63rem] flex max-w-[77.5rem] flex-col gap-[2.5rem] px-[1.5rem]">
				<hr className="border-black-30" />
				<div className="mx-auto flex max-w-[71.38rem] flex-col gap-[2.5rem] md:gap-[3.5rem]">
					<p className="text-h3 text-center font-bold">
						As a team we strive together, collaborate and provide
						the best experience for our clients.
					</p>
					<div className="flex flex-col gap-[3.5rem] md:flex-row md:justify-between md:gap-0">
						<div className="flex flex-col items-center gap-[1.5rem]">
							<span className="text-[3.5rem] font-semibold leading-[5rem] md:text-[6rem]">
								12+
							</span>
							<span className="text-body text-center font-medium">
								Years of experience
							</span>
						</div>
						<div className="flex flex-col items-center gap-[1.5rem]">
							<span className="text-[3.5rem] font-semibold leading-[5rem] md:text-[6rem]">
								150+
							</span>
							<span className="text-body text-center font-medium">
								Project completed
							</span>
						</div>
						<div className="flex flex-col items-center gap-[1.5rem]">
							<span className="text-[3.5rem] font-semibold leading-[5rem] md:text-[6rem]">
								250+
							</span>
							<span className="text-body text-center font-medium">
								Leading companies
							</span>
						</div>
					</div>
				</div>
				<hr className="border-black-30" />
			</section>
		</>
	)
}
