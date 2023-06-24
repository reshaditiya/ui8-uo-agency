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
					Our digital agency prioritizes simplicity, designing clean
					and intuitive interfaces that captivate in today&apos;s
					fast-paced digital landscape. With a focus on essential
					elements and clutter-free layouts, we create visually
					appealing and highly functional experiences.
					<br />
					<br />
					Simplicity goes beyond aesthetics—it&apos;s about effortless
					interaction. We streamline processes and optimize
					navigation, empowering users to engage seamlessly. Trust us
					to harness the power of simplicity and transform your online
					presence.
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
