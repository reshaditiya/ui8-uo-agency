"use client"

import { useContext } from "react"
import { ContactDataContext } from "@/src/components/Contexts"

const budgetOption = ["<$5K", "$5-10K", "$10-50K", "$50K+"]

export default function Page() {
	const { getter: contactData, setter: dispatchContactData }: any =
		useContext(ContactDataContext)

	return (
		<>
			<h1 className="text-h2">
				Tell us a bit more about yourself and your company.
			</h1>
			<form className="mt-[2.5rem] flex flex-col gap-[1.5rem] md:gap-[2.25rem]">
				<label
					htmlFor="description"
					className="text-body flex flex-col gap-[1rem]"
				>
					Describe your project
					<textarea
						id="description"
						name="description"
						className="input-text"
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
									className="btn-border peer hidden"
									name="budget"
									checked={contactData.budget === budget}
									value={budget}
									onChange={(e) =>
										dispatchContactData({
											type: "budget",
											value: e.target.value,
										})
									}
								/>

								<label
									htmlFor={budget}
									className="btn-border peer-checked:btn-border-active block"
								>
									{budget}
								</label>
							</div>
						))}
					</div>
				</div>
			</form>
		</>
	)
}
