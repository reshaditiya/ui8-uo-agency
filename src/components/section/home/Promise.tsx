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
				We offer tailored solutions that match your unique requirements,
				whether it&apos;s a stunning website design, robust e-commerce
				functionality, or seamless mobile app development. Our
				professionals work closely with you to ensure our delivery
				aligns with your needs, timeline, and budget.
				<br />
				<br />
				With a customer-centric approach, we exceed expectations in
				every project. Combining creative flair with technical
				expertise, we deliver solutions that make a lasting impact on
				your audience. From user-friendly interfaces to optimized
				performance, we drive your business forward.
				<br />
				<br />
				We prioritize clear communication, transparency, and
				collaboration. Throughout the process, we keep you involved,
				providing updates and seeking your feedback. Trust our team to
				deliver exceptional results, meeting all your digital needs
				efficiently and effectively.
			</p>
		</motion.section>
	)
}
