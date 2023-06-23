"use client"

import Image from "next/image"
import works from "../data/works"
import Link from "next/link"
import { motion } from "framer-motion"
import { defaultAnimation } from "./utils/animation"

type CollaborateCompanies = {
	name: string
	src: string
}

type OurServices = {
	name: string
	desc: string
}

const collaborateCompanies: CollaborateCompanies[] = [
	{ name: "Alitalia", src: "/companies-logo/alitalia.svg" },
	{ name: "Bally", src: "/companies-logo/bally.svg" },
	{ name: "Aware", src: "/companies-logo/aware.svg" },
	{ name: "Asuna", src: "/companies-logo/asuna.svg" },
	{ name: "Vidkron", src: "/companies-logo/vidkron.svg" },
]

const ourServices: OurServices[] = [
	{
		name: "UIUX Design",
		desc: "Lörem ipsum metavalens krisväska. Läsade infras. Uling vipp och gagyrtad. Donde beföskade polyamori är.",
	},
	{
		name: "Branding",
		desc: "Lörem ipsum metavalens krisväska. Läsade infras. Uling vipp och gagyrtad. Donde beföskade polyamori är.",
	},
	{
		name: "SAAS",
		desc: "Lörem ipsum metavalens krisväska. Läsade infras. Uling vipp och gagyrtad. Donde beföskade polyamori är.",
	},
	{
		name: "Development",
		desc: "Lörem ipsum metavalens krisväska. Läsade infras. Uling vipp och gagyrtad. Donde beföskade polyamori är.",
	},
]

export default function Home() {
	return (
		<>
			{/* title section */}
			<section className="mx-auto max-w-[77.5rem] px-[1.5rem] pt-[3.75rem] md:pt-[5rem]">
				<div className="relative flex flex-col gap-[1rem] overflow-visible md:gap-[1.5rem]">
					{/* derocation */}
					<motion.div
						className="absolute left-0 top-[-1.5rem] h-[1.2rem] w-[3.13rem] rounded-full border border-black-50 md:top-[-4rem] md:h-[3rem] md:w-[7.75rem]"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.6 }}
					/>
					<motion.div
						className="absolute bottom-[-1.5rem] right-0 h-[1rem] w-[2.5rem] rounded-full border border-black-50 md:h-[1.9rem] md:w-[4.06rem]"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.8 }}
					/>

					<motion.h1
						className="text-h1 max-w-[64.31rem]"
						variants={defaultAnimation}
						initial="initial"
						animate="animate"
					>
						We are a{" "}
						<span className="text-blue-100">digital agency</span>{" "}
						that will save your life
					</motion.h1>
					<motion.span
						className="text-sm max-w-[41.69rem] text-black-70"
						variants={defaultAnimation}
						initial="initial"
						animate="animate"
						transition={{ delay: 0.2 }}
					>
						Lörem ipsum metavalens krisväska. Läsade infras. Uling
						vipp och gagyrtad. Donde beföskade polyamori är lavis.
						Prelasa esm, kropp sytes.
					</motion.span>
				</div>
				<motion.figure
					className="w-fill relative mt-[4.63rem] h-[27.44rem] md:mt-[4.19rem] md:h-[39.25rem]"
					variants={defaultAnimation}
					initial="initial"
					animate="animate"
					transition={{ delay: 0.4 }}
				>
					<Image
						src="/images/team1.webp"
						alt="Our Team"
						fill
						className="object-cover"
					/>
				</motion.figure>
			</section>

			{/* company collaboration section */}
			<motion.section
				className="mx-auto mt-[2.56rem] flex max-w-[77.5rem] flex-col gap-[1.5rem] py-[2rem] md:mt-[0.5rem] md:gap-[3rem] md:py-[6.88rem]"
				variants={defaultAnimation}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, margin: "-240px" }}
			>
				<p className="text-body px-[1.5rem] text-center font-semibold text-black-50">
					We collaborate with{" "}
					<span className="text-blue-100">
						250+ leading companies-logo
					</span>
				</p>

				{/* companies logo */}
				<div className="flex flex-wrap justify-center">
					{collaborateCompanies.map((company) => (
						<figure
							key={company.src}
							className="relative h-[4rem] w-[8.63rem] md:h-[5rem] md:w-[15rem]"
						>
							<Image src={company.src} alt={company.name} fill />
						</figure>
					))}
				</div>
			</motion.section>

			{/* we are passionate section */}
			<motion.section
				className="bg-light-gray"
				variants={defaultAnimation}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, margin: "-240px" }}
			>
				<div className="mx-auto mt-[2.56rem] flex max-w-[77.5rem] flex-col gap-[1.5rem] px-[1.5rem] py-[2.5rem] md:mt-[0.5rem] md:flex-row md:py-[4.5rem]">
					<h2 className="text-h2 flex-1">We are passionate</h2>
					<p className="text-body flex-1 text-black-50">
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
			</motion.section>

			{/* services section */}
			<motion.section
				className="mx-auto mt-[1.5rem] max-w-[77.5rem] px-[1.5rem] py-[2rem] md:mt-[0.5rem] md:py-[3.75rem]"
				variants={defaultAnimation}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, margin: "-240px" }}
			>
				<div className="flex flex-col items-start gap-[2rem] md:flex-row md:items-center md:justify-between md:gap-[1.5rem]">
					<div className="flex max-w-[39.38rem] flex-1 flex-col gap-[1rem] md:gap-[1.5rem]">
						<h2 className="text-h2">
							We provide the best service for you
						</h2>
						<p className="text-sm text-black-70">
							Lörem ipsum metavalens krisväska. Läsade infras.
							Uling vipp och gagyrtad. Donde beföskade polyamori
							är.
						</p>
					</div>
					<button className="btn-blue">Request a quote</button>
				</div>

				{/* services list */}
				<hr className="mt-[3.5rem] border-black-10" />
				{ourServices.map((service) => (
					<div
						key={service.name}
						className="group border-b border-black-10 px-[1.5rem] py-[1.5rem] transition-all hover:bg-black-10 md:flex md:items-center md:justify-between md:px-[2rem] md:py-[2rem]"
					>
						<div className="m:gap-[1.5rem] flex flex-col gap-[1rem]">
							<div className="flex items-center justify-between">
								<h3 className="text-h3">{service.name}</h3>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="h-[3rem] w-[3rem] p-[0.5rem] group-hover:bg-blue-100 group-hover:stroke-white md:hidden"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
									/>
								</svg>
							</div>
							<p className="text-sm max-w-[32.63rem] text-black-70">
								{service.desc}
							</p>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="hidden h-[6.25rem] w-[6.25rem] p-[1.5rem] group-hover:bg-blue-100 group-hover:stroke-white md:block"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
							/>
						</svg>
					</div>
				))}
			</motion.section>

			{/* recent works section */}
			<motion.section
				className="mx-auto max-w-[77.5rem] px-[1.5rem]"
				variants={defaultAnimation}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, margin: "-240px" }}
			>
				<div className="md:flex md:items-end md:justify-between">
					<h2 className="text-h3">Recent Works</h2>
					<Link
						href="/works"
						className="text-sm w-fill mt-[2.5rem] hidden items-center justify-center font-semibold text-blue-100 underline hover:text-blue-90 active:text-blue-70 md:inline"
					>
						View More
					</Link>
				</div>

				{/* works list */}
				<div className=" md:no-scrollbar mt-[1.5rem] flex flex-col gap-[1.5rem] md:flex-row md:overflow-x-auto">
					{works.map((work) => (
						<div
							key={work.name}
							className="flex flex-col gap-[1rem]"
						>
							<figure className="w-fill relative h-[13.5rem] md:h-[15.63rem] md:w-[22rem]">
								<Image
									src={work.imageSrc}
									alt={work.name}
									fill
									className="object-cover"
								/>
							</figure>
							<p className="text-body text-black-70">
								<span className="font-bold">
									{work.name + ". "}
								</span>
								{work.shortDesc}
							</p>
						</div>
					))}
				</div>

				<Link
					href="/works"
					className="text-sm w-fill mx-auto mt-[2.5rem] flex items-center justify-center font-semibold text-blue-100 underline hover:text-blue-90 active:text-blue-70 md:hidden"
				>
					View More
				</Link>
			</motion.section>

			{/* we deliver section */}
			<motion.section
				className="mx-auto mb-[4.5rem] mt-[4.25rem] flex max-w-[77.5rem] flex-col gap-[2rem] px-[1.5rem] py-[2rem] md:mb-[0.5rem] md:mt-[0.5rem] md:flex-row md:gap-[1.5rem] md:py-[9.63rem]"
				variants={defaultAnimation}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, margin: "-240px" }}
			>
				<header className="flex flex-1 flex-col items-start gap-[1.5rem] md:gap-[2rem]">
					<h2 className="text-h2">
						We deliver for you whatever you need
					</h2>
					<button className="btn-blue">Let’s work together</button>
				</header>
				<p className="text-body flex-1 text-black-50">
					Overcoming expectations is our mission. We’re here to follow
					your vision and extend it into one consistent product. You
					got all according to our agreement, and some more.
					<br />
					<br />
					The process based on a customer-centric approach. Nowadays
					brand communication should be something that people really
					want to be involved in. Understanding and vibing your
					audience is what we’re here for.
					<br />
					<br />
					It may be not easy and time-consuming, but we don’t look for
					short ways. We’re lordly of our mission and it’s this
					attitude that defines us.
				</p>
			</motion.section>
		</>
	)
}
