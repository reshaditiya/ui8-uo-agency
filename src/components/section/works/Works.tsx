"use client"

import Image from "next/image"
import works from "@/src/data/works"
import { defaultAnimation } from "@/src/app/utils/animation"
import { motion } from "framer-motion"

export default function Works() {
	return (
		<section className="mx-auto mb-[6.25rem] max-w-[77.5rem] px-[1.5rem] pt-[3.75rem] md:pt-[5rem]">
			<motion.h1
				className="text-h1 max-w-[64.31rem]"
				variants={defaultAnimation}
				initial="initial"
				animate="animate"
			>
				Our some fabulous works
			</motion.h1>

			{/* work list */}
			<motion.div
				className="mt-[4rem] flex flex-col gap-[2.5rem]"
				variants={defaultAnimation}
				initial="initial"
				animate="animate"
				transition={{
					delay: 0.2,
				}}
			>
				{works.map((work) => (
					<motion.div
						key={work.name}
						className="w-fill relative flex h-[23.31rem] flex-col items-start gap-[1.5rem] px-[1rem] pb-[1.5rem] pt-[3.44rem] md:h-[39.25rem] md:justify-between md:px-[3.5rem] md:pb-[3.5rem] md:pt-[3.5rem]"
						variants={defaultAnimation}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
							margin: "-240px",
						}}
					>
						<h2 className="text-body font-bold text-white">
							{work.name}
						</h2>
						<p className="text-h3 mt-auto max-w-[18.06rem] justify-self-end text-white md:mt-0 md:max-w-[51.94rem]">
							{work.longDesc}
						</p>
						<button className="btn-blue">Learn more</button>

						<div className="absolute inset-0 -z-10 bg-black-100/20" />
						<Image
							src={work.imageSrc}
							alt={work.name}
							fill
							className="-z-20 object-cover"
						/>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}
