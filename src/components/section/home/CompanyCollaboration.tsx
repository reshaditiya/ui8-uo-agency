"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { defaultAnimation } from "@/src/app/utils/animation"

type CollaborateCompanies = {
	name: string
	src: string
}

const collaborateCompanies: CollaborateCompanies[] = [
	{ name: "Alitalia", src: "/companies-logo/alitalia.svg" },
	{ name: "Bally", src: "/companies-logo/bally.svg" },
	{ name: "Aware", src: "/companies-logo/aware.svg" },
	{ name: "Asuna", src: "/companies-logo/asuna.svg" },
	{ name: "Vidkron", src: "/companies-logo/vidkron.svg" },
]

export default function CompanyCollaboration() {
	return (
		<motion.section
			className="mx-auto mt-[2.56rem] flex max-w-[77.5rem] flex-col gap-[1.5rem] py-[2rem] md:mt-[0.5rem] md:gap-[3rem] md:py-[6.88rem]"
			variants={defaultAnimation}
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
				margin: "-240px",
			}}
		>
			<p className="text-body px-[1.5rem] text-center font-semibold text-black-50">
				We collaborate with{" "}
				<span className="text-blue-100">250+ leading companies</span>
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
	)
}
