"use client"

import { useContext } from "react"
import { ContactDataContext } from "@/src/components/Contexts"

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

	return (
		<>
			<h1 className="text-h2">What do you need help with from us?</h1>
			<form className="mt-[2.5rem] flex flex-wrap gap-[0.75rem] md:gap-[1.5rem]">
				{services.map((service) => (
					<div key={service}>
						<input
							id={service}
							type="radio"
							checked={contactData.need === service}
							onChange={(e) =>
								dispatchContactData({
									type: "need",
									value: e.target.value,
								})
							}
							className="btn-border peer hidden"
							name="need"
							value={service}
						/>

						<label
							htmlFor={service}
							className="btn-border peer-checked:btn-border-active block"
						>
							{service}
						</label>
					</div>
				))}
			</form>
		</>
	)
}
