"use client"

import { useContext, useState } from "react"
import { contactDataContext } from "@/src/app/utils/contexts"
import { ContactAction } from "@/src/components"
import { motion, AnimatePresence } from "framer-motion"
import { defaultAnimationSmall } from "../../utils/animation"

const projectTime = ["1 Month", "2 Months", "3 Months"]

export default function Page() {
	const { getter: contactData, setter: dispatchContactData }: any =
		useContext(contactDataContext)
	const [isEverSubmitted, setIsEverSubmitted] = useState(false)
	const validateResult = contactData.projectTime

	function submitHandler() {
		setIsEverSubmitted(true)

		return validateResult ? true : false
	}

	return (
		<>
			<h1 className="text-h2">
				When do you expect to start the project.
			</h1>
			<form
				className="mt-[2.5rem] flex flex-col gap-[1.5rem] md:gap-[2.25rem]"
				onSubmit={(e) => e.preventDefault()}
			>
				<div className="flex flex-col gap-[1rem]">
					<label className="text-body" htmlFor="budget">
						Time to start project
					</label>
					<div
						id="budget"
						className="flex flex-wrap gap-[0.63rem] md:gap-[1rem]"
					>
						{projectTime.map((projectTime) => (
							<div key={projectTime}>
								<input
									id={projectTime}
									type="radio"
									className="btn-border peer hidden"
									name="projectTime"
									checked={
										contactData.projectTime === projectTime
									}
									onChange={(e) =>
										dispatchContactData({
											type: "projectTime",
											value: projectTime,
										})
									}
								/>

								<label
									htmlFor={projectTime}
									className={`btn-border peer-checked:btn-border-active block ${
										isEverSubmitted &&
										!contactData.projectTime &&
										"border-red text-red"
									}`}
									onKeyDown={(e) => {
										e.key === "Enter" &&
											dispatchContactData({
												type: "projectTime",
												value: projectTime,
											})
									}}
									tabIndex={0}
								>
									{projectTime}
								</label>
							</div>
						))}
					</div>
					<label
						htmlFor="else"
						className="text-body flex flex-col gap-[1rem]"
					>
						Anything else?
						<textarea
							id="else"
							name="else"
							className="input-text"
							placeholder="Whatever else there is to share, please do let us know here."
							value={contactData.else}
							onChange={(e) =>
								dispatchContactData({
									type: "else",
									value: e.target.value,
								})
							}
						/>
					</label>
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
