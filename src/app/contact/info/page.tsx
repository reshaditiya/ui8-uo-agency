"use client"

import { useContext, useState } from "react"
import { contactDataContext } from "@/src/app/utils/contexts"
import { ContactAction } from "@/src/components"
import { motion, AnimatePresence } from "framer-motion"
import { defaultAnimationSmall } from "../../utils/animation"

const budgetOption = ["<$5K", "$5-10K", "$10-50K", "$50K+"]

export default function Page() {
	const { getter: contactData, setter: dispatchContactData }: any =
		useContext(contactDataContext)
	const [isEverSubmitted, setIsEverSubmitted] = useState(false)
	const validateResult = contactData.description && contactData.budget

	function submitHandler() {
		setIsEverSubmitted(true)

		return validateResult ? true : false
	}

	return (
		<>
			<h1 className="text-h2">
				Tell us a bit more about yourself and your company.
			</h1>
			<form
				className="mt-[2.5rem] flex flex-col gap-[1.5rem] md:gap-[2.25rem]"
				onSubmit={(e) => e.preventDefault()}
			>
				<label
					htmlFor="description"
					className="text-body flex flex-col gap-[1rem]"
				>
					Describe your project
					<textarea
						id="description"
						name="description"
						className={`input-text  ${
							isEverSubmitted &&
							!contactData.description &&
							"border-red text-red placeholder:text-red"
						}`}
						placeholder="Tell us about your project"
						value={contactData.description}
						onChange={(e) =>
							dispatchContactData({
								type: "description",
								value: e.target.value,
							})
						}
					/>
				</label>
				<div className="flex flex-col gap-[1rem]">
					<label className="text-body" htmlFor="budget">
						Project Budget (USD)
					</label>
					<div
						id="budget"
						className="flex flex-wrap gap-[0.63rem] md:gap-[1rem]"
					>
						{budgetOption.map((budget) => (
							<div key={budget}>
								<input
									id={budget}
									type="radio"
									className="peer hidden"
									name="budget"
									checked={contactData.budget === budget}
									onChange={(e) =>
										dispatchContactData({
											type: "budget",
											value: budget,
										})
									}
								/>

								<label
									htmlFor={budget}
									className={`btn-border peer-checked:btn-border-active block ${
										isEverSubmitted &&
										!contactData.budget &&
										"border-red text-red"
									}`}
									onKeyDown={(e) => {
										e.key === "Enter" &&
											dispatchContactData({
												type: "budget",
												value: budget,
											})
									}}
									tabIndex={0}
								>
									{budget}
								</label>
							</div>
						))}
					</div>
				</div>
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
