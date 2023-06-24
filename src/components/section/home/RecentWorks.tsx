"use client"

import { motion } from "framer-motion"
import { defaultAnimation } from "@/src/app/utils/animation"
import works from "@/src/data/works"
import Image from "next/image"
import Link from "next/link"

export default function RecentWorks() {
	return (
		<motion.section
			className="mx-auto max-w-[77.5rem] px-[1.5rem]"
			variants={defaultAnimation}
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
				margin: "-240px",
			}}
		>
			<div className="md:flex md:items-end md:justify-between">
				<h2 className="text-h3">Recent Works</h2>
				<Link
					href="/works"
					className="text-sm w-fill mt-[2.5rem] hidden items-center justify-center font-semibold text-blue-100 underline hover:text-blue-90 active:text-blue-70 md:inline"
				>
					View More
				</Link>
			</div>

			{/* works list */}
			<div className=" md:no-scrollbar mt-[1.5rem] flex flex-col gap-[1.5rem] md:flex-row md:overflow-x-auto">
				{works.map((work) => (
					<div key={work.name} className="flex flex-col gap-[1rem]">
						<figure className="w-fill relative h-[13.5rem] md:h-[15.63rem] md:w-[22rem]">
							<Image
								src={work.imageSrc}
								alt={work.name}
								fill
								className="object-cover"
							/>
						</figure>
						<p className="text-body text-black-70">
							<span className="font-bold">
								{work.name + ". "}
							</span>
							{work.shortDesc}
						</p>
					</div>
				))}
			</div>

			<Link
				href="/works"
				className="text-sm w-fill mx-auto mt-[2.5rem] flex items-center justify-center font-semibold text-blue-100 underline hover:text-blue-90 active:text-blue-70 md:hidden"
			>
				View More
			</Link>
		</motion.section>
	)
}
