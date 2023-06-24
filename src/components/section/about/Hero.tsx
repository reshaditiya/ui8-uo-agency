"use client"

import { motion } from "framer-motion"
import { defaultAnimation } from "@/src/app/utils/animation"
import Image from "next/image"

export default function Hero() {
	return (
		<section className="bg-black-100 px-[1.5rem] pb-[1.5rem] pt-[3.75rem] md:pb-[6.25rem] md:pt-[5rem]">
			<div className="mx-auto flex max-w-[77.5rem] flex-col gap-[3.13rem] md:gap-[4.19rem]">
				<div className="flex flex-col gap-[1rem] md:gap-[1.5rem]">
					<motion.h1
						className="text-h1 max-w-[64.31rem] text-white"
						variants={defaultAnimation}
						initial="initial"
						animate="animate"
					>
						Creating digital product excellence
					</motion.h1>
					<motion.p
						className="text-sm max-w-[41.69rem] text-white"
						variants={defaultAnimation}
						initial="initial"
						animate="animate"
						transition={{
							delay: 0.2,
						}}
					>
						Delivering digital excellence, exceeding industry
						standards. Seamless user experiences, cutting-edge
						features. Partner with us for unparalleled impact.
					</motion.p>
				</div>
				<motion.div
					className="flex flex-col gap-[1.5rem] md:flex-row"
					variants={defaultAnimation}
					initial="initial"
					animate="animate"
					transition={{
						delay: 0.4,
					}}
				>
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
				</motion.div>
			</div>
		</section>
	)
}
