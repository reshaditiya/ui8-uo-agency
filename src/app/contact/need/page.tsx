"use client"

import { useContext, useState } from "react"
import { ContactDataContext } from "@/src/components/Contexts"
import { ContactAction } from "@/src/components"

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
		useContext(ContactDataContext)
	const [isEverSubmitted, setIsEverSubmitted] = useState(false)
	const validateResult = contactData.need

	function submitHandler() {
		setIsEverSubmitted(true)

		return validateResult ? true : false
	}

	return (
		<>
			<h1 className="text-h2">What do you need help with from us?</h1>
			{isEverSubmitted && !validateResult && (
				<p className="text-body mt-[1.5rem] text-red">
					Make sure to fill all the necessary data.
				</p>
			)}
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
									value: e.target.value,
								})
							}}
							className="peer hidden"
							name="need"
							value={service}
						/>

						<label
							htmlFor={service}
							className={`btn-border peer-checked:btn-border-active block ${
								isEverSubmitted &&
								!contactData.need &&
								"border-red text-red"
							}`}
						>
							{service}
						</label>
					</div>
				))}
				<ContactAction clickHandler={submitHandler} />
			</form>
		</>
	)
}
