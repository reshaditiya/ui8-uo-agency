"use client"

import { defaultAnimation } from "@/src/app/utils/animation"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Principle() {
	return (
		<motion.section
			className="mx-auto mt-[0.63rem] flex max-w-[77.5rem] flex-col gap-[4rem] px-[1.5rem] py-[4.5rem] md:mt-0 md:flex-row md:items-start md:py-[6.88rem]"
			variants={defaultAnimation}
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
				margin: "-240px",
			}}
		>
			<div className="flex flex-col gap-[1rem] md:flex-1 md:gap-[2rem]">
				<h2 className="text-h2">Simplicity</h2>
				<p className="text-body text-black-50">
					Overcoming expectations is our mission. We’re here to follow
					your vision and extend it into one consistent product. You
					got all according to our agreement, and some more.
					<br />
					<br />
					The process based on a customer-centric approach. Nowadays
					brand communication should be something that people really
					want to be involved in. Understanding and vibing your
					audience is what we’re here for.
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
		</motion.section>
	)
}
