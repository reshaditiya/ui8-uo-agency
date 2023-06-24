"use client"

import { defaultAnimation } from "@/src/app/utils/animation"
import { motion } from "framer-motion"

export default function Passion() {
	return (
		<motion.section
			className="bg-light-gray"
			variants={defaultAnimation}
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
				margin: "-240px",
			}}
		>
			<div className="mx-auto mt-[2.56rem] flex max-w-[77.5rem] flex-col gap-[1.5rem] px-[1.5rem] py-[2.5rem] md:mt-[0.5rem] md:flex-row md:py-[4.5rem]">
				<h2 className="text-h2 flex-1">We are passionate</h2>
				<p className="text-body flex-1 text-black-50">
					Overcoming expectations is our mission. We’re here to follow
					your vision and extend it into one consistent product. You
					got it all according to our agreement, and some more.
					<br />
					<br />
					The process is based on a customer-centric approach.
					Nowadays, brand communication should be something that
					people really want to be involved in. Understanding and
					vivifying your audience is what we’re here for.
					<br />
					<br />
					It may not be easy and time-consuming, but we don’t look for
					shortcuts. We’re proud of our mission, and it’s this
					attitude that defines us.
				</p>
			</div>
		</motion.section>
	)
}
