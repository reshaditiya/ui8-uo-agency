"use client"

import { motion } from "framer-motion"
import { defaultAnimation } from "@/src/app/utils/animation"

export default function Promise() {
	return (
		<motion.section
			className="mx-auto mb-[4.5rem] mt-[4.25rem] flex max-w-[77.5rem] flex-col gap-[2rem] px-[1.5rem] py-[2rem] md:mb-[0.5rem] md:mt-[0.5rem] md:flex-row md:gap-[1.5rem] md:py-[9.63rem]"
			variants={defaultAnimation}
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
				margin: "-240px",
			}}
		>
			<header className="flex flex-1 flex-col items-start gap-[1.5rem] md:gap-[2rem]">
				<h2 className="text-h2">
					We deliver for you whatever you need
				</h2>
				<button className="btn-blue">Let’s work together</button>
			</header>
			<p className="text-body flex-1 text-black-50">
				Overcoming expectations is our mission. We’re here to follow
				your vision and extend it into one consistent product. You got
				all according to our agreement, and some more.
				<br />
				<br />
				The process based on a customer-centric approach. Nowadays brand
				communication should be something that people really want to be
				involved in. Understanding and vibing your audience is what
				we’re here for.
				<br />
				<br />
				It may be not easy and time-consuming, but we don’t look for
				short ways. We’re lordly of our mission and it’s this attitude
				that defines us.
			</p>
		</motion.section>
	)
}
