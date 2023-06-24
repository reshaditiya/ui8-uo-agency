"use client"

import { motion } from "framer-motion"
import { defaultAnimation } from "../../../app/utils/animation"

type OurServices = {
	name: string
	desc: string
}

const ourServices: OurServices[] = [
	{
		name: "UI/UX Design",
		desc: "We create captivating interfaces that enhance digital experiences, combining artistic creativity with user-centric principles.",
	},
	{
		name: "Branding",
		desc: "Our expertise in branding helps businesses establish a strong identity, from unique logos to compelling messaging that resonates with the target audience.",
	},
	{
		name: "SAAS",
		desc: "We provide scalable and secure cloud-based solutions, empowering businesses to thrive in the digital landscape.",
	},
	{
		name: "Development",
		desc: "From concept to implementation, our agile approach delivers customized software solutions that drive business growth with attention to detail and user experience.",
	},
]

export default function Services() {
	return (
		<motion.section
			className="mx-auto mt-[1.5rem] max-w-[77.5rem] px-[1.5rem] py-[2rem] md:mt-[0.5rem] md:py-[3.75rem]"
			variants={defaultAnimation}
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
				margin: "-240px",
			}}
		>
			<div className="flex flex-col items-start gap-[2rem] md:flex-row md:items-center md:justify-between md:gap-[1.5rem]">
				<div className="flex max-w-[39.38rem] flex-1 flex-col gap-[1rem] md:gap-[1.5rem]">
					<h2 className="text-h2">
						We provide the best service for you
					</h2>
					<p className="text-sm text-black-70">
						We provide the best service for you, tailored to meet
						your unique needs and exceed your expectations, ensuring
						your utmost satisfaction.
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
	)
}
