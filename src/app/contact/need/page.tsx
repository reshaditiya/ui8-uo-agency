"use client"

import { useContext, useState } from "react"
import { contactDataContext } from "@/src/app/utils/contexts"
import { ContactAction } from "@/src/components"
import { motion, AnimatePresence } from "framer-motion"
import { defaultAnimationSmall } from "../../utils/animation"

const services = [
	"Branding",
	"Web Design",
	"App Design",
	"Dashboard Design",
	"SAAS",
	"Development",
	"Graphic Design",
	"Fintech",
	"Presentation",
]

export default function Page() {
	const { getter: contactData, setter: dispatchContactData }: any =
		useContext(contactDataContext)
	const [isEverSubmitted, setIsEverSubmitted] = useState(false)
	const validateResult = contactData.need

	function submitHandler() {
		setIsEverSubmitted(true)

		return validateResult ? true : false
	}

	return (
		<>
			<h1 className="text-h2">What do you need help with from us?</h1>

			<form
				className="w-fill mt-[2.5rem] flex flex-wrap gap-[0.75rem] md:gap-[1.5rem]"
				onSubmit={(e) => e.preventDefault()}
			>
				{services.map((service) => (
					<div key={service}>
						<input
							id={service}
							type="radio"
							checked={contactData.need === service}
							onChange={(e) => {
								dispatchContactData({
									type: "need",
									value: service,
								})
							}}
							className="peer hidden"
							name="need"
						/>
						<label
							htmlFor={service}
							className={`btn-border peer-checked:btn-border-active block ${
								isEverSubmitted &&
								!contactData.need &&
								"border-red text-red"
							}`}
							onKeyDown={(e) => {
								e.key === "Enter" &&
									dispatchContactData({
										type: "need",
										value: service,
									})
							}}
							tabIndex={0}
						>
							{service}
						</label>
					</div>
				))}
				<AnimatePresence>
					{isEverSubmitted && !validateResult && (
						<motion.p
							className="text-sm flex w-full gap-[0.5rem] text-red"
							variants={defaultAnimationSmall}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
								/>
							</svg>
							Make sure to fill all the necessary data.
						</motion.p>
					)}
				</AnimatePresence>
				<ContactAction clickHandler={submitHandler} />
			</form>
		</>
	)
}
