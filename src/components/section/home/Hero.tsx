"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { defaultAnimation } from "@/src/app/utils/animation"

export default function Hero() {
	return (
		<section className="mx-auto max-w-[77.5rem] px-[1.5rem] pt-[3.75rem] md:pt-[5rem]">
			<div className="relative flex flex-col gap-[1rem] overflow-visible md:gap-[1.5rem]">
				{/* derocation */}
				<motion.div
					className="absolute left-0 top-[-1.5rem] h-[1.2rem] w-[3.13rem] rounded-full border border-black-50 md:top-[-4rem] md:h-[3rem] md:w-[7.75rem]"
					initial={{
						scale: 0.8,
						opacity: 0,
					}}
					animate={{
						scale: 1,
						opacity: 1,
					}}
					transition={{
						delay: 0.6,
					}}
				/>
				<motion.div
					className="absolute bottom-[-1.5rem] right-0 h-[1rem] w-[2.5rem] rounded-full border border-black-50 md:h-[1.9rem] md:w-[4.06rem]"
					initial={{
						scale: 0.8,
						opacity: 0,
					}}
					animate={{
						scale: 1,
						opacity: 1,
					}}
					transition={{
						delay: 0.8,
					}}
				/>

				<motion.h1
					className="text-h1 max-w-[64.31rem]"
					variants={defaultAnimation}
					initial="initial"
					animate="animate"
				>
					We are a{" "}
					<span className="text-blue-100">digital agency</span> that
					will save your life
				</motion.h1>
				<motion.span
					className="text-sm max-w-[41.69rem] text-black-70"
					variants={defaultAnimation}
					initial="initial"
					animate="animate"
					transition={{
						delay: 0.2,
					}}
				>
					We are a digital agency that will save your life, ensuring
					your success in the digital world with our innovative
					strategies and unparalleled expertise.
				</motion.span>
			</div>
			<motion.figure
				className="w-fill relative mt-[4.63rem] h-[27.44rem] md:mt-[4.19rem] md:h-[39.25rem]"
				variants={defaultAnimation}
				initial="initial"
				animate="animate"
				transition={{
					delay: 0.4,
				}}
			>
				<Image
					src="/images/team1.webp"
					alt="Our Team"
					fill
					className="object-cover"
				/>
			</motion.figure>
		</section>
	)
}
