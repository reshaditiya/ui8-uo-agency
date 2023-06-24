"use client"

import { motion } from "framer-motion"
import { defaultAnimation } from "@/src/app/utils/animation"

export default function Stats() {
	return (
		<motion.section
			className="mx-auto mb-[3.06rem] mt-[0.63rem] flex max-w-[77.5rem] flex-col gap-[2.5rem] px-[1.5rem]"
			variants={defaultAnimation}
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
				margin: "-240px",
			}}
		>
			<hr className="border-black-30" />
			<div className="mx-auto flex max-w-[71.38rem] flex-col gap-[2.5rem] md:gap-[3.5rem]">
				<p className="text-h3 text-center font-bold">
					As a team, we strive to work together, collaborate, and
					provide the best experience for our clients.
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
		</motion.section>
	)
}
