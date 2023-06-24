"use client"

import { useContext, useState } from "react"
import { contactDataContext } from "@/src/app/utils/contexts"
import { ContactAction } from "@/src/components"
import { motion, AnimatePresence } from "framer-motion"
import { defaultAnimationSmall } from "../../utils/animation"

function validateEmail(email: string): boolean {
	const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
	return email.trim() !== "" && expression.test(email)
}

export default function Page() {
	const { getter: contactData, setter: dispatchContactData }: any =
		useContext(contactDataContext)
	const [isEverSubmitted, setIsEverSubmitted] = useState(false)
	const validateResult =
		contactData.lastName &&
		contactData.lastName &&
		contactData.email &&
		validateEmail(contactData.email) &&
		contactData.company

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
				className="mt-[2.5rem] grid grid-cols-2 gap-[0.75rem] md:gap-[1.5rem]"
				onSubmit={(e) => e.preventDefault()}
			>
				<label htmlFor="firstName" className="sr-only">
					First Name
				</label>
				<input
					id="firstName"
					name="firstName"
					type="text"
					className={`input-text  ${
						isEverSubmitted &&
						!contactData.firstName &&
						"border-red text-red placeholder:text-red"
					}`}
					placeholder="First name"
					value={contactData.firstName}
					onChange={(e) => {
						dispatchContactData({
							type: "firstName",
							value: e.target.value,
						})
					}}
				/>

				<label htmlFor="lastName" className="sr-only">
					Last Name
				</label>
				<input
					id="lastName"
					name="lastName"
					type="text"
					className={`input-text  ${
						isEverSubmitted &&
						!contactData.lastName &&
						"border-red text-red placeholder:text-red"
					}`}
					placeholder="Last name"
					value={contactData.lastName}
					onChange={(e) => {
						dispatchContactData({
							type: "lastName",
							value: e.target.value,
						})
					}}
				/>

				<label htmlFor="email" className="sr-only">
					Your email address
				</label>
				<input
					id="email"
					name="email"
					type="email"
					className={`input-text col-span-2  ${
						isEverSubmitted &&
						!validateEmail(contactData.email) &&
						"border-red text-red placeholder:text-red"
					}`}
					placeholder="Your email address"
					value={contactData.email}
					onChange={(e) => {
						dispatchContactData({
							type: "email",
							value: e.target.value,
						})
					}}
				/>

				<label htmlFor="company" className="sr-only">
					Your company name
				</label>
				<input
					id="company"
					name="company"
					type="text"
					className={`input-text col-span-2  ${
						isEverSubmitted &&
						!contactData.company &&
						"border-red text-red placeholder:text-red"
					}`}
					placeholder="Your company name"
					value={contactData.company}
					onChange={(e) =>
						dispatchContactData({
							type: "company",
							value: e.target.value,
						})
					}
				/>
				<AnimatePresence>
					{isEverSubmitted && !validateResult && (
						<motion.p
							className="text-sm col-span-2 flex w-full gap-[0.5rem] text-red"
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
