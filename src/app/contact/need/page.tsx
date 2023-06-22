"use client"

import { useContext, useEffect, useReducer } from "react"
import { ContactDataContext } from "@/src/components/Contexts"

type IsInputErrorsState = {
	need: Boolean
}

type IsInputErrorsAction = {
	type: "need"
	value: boolean
}

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

const inputErrorsInit: IsInputErrorsState = {
	need: false,
}

function reducerInputErrors(
	states: IsInputErrorsState,
	action: IsInputErrorsAction
): IsInputErrorsState {
	return {
		...states,
		[action.type]: action.value,
	}
}

export default function Page() {
	const {
		getter: contactData,
		setter: dispatchContactData,
		isValid,
	}: any = useContext(ContactDataContext)

	const [isInputErrors, dispatchIsInputErrors] = useReducer(
		reducerInputErrors,
		inputErrorsInit
	)

	useEffect(() => {
		dispatchIsInputErrors({
			type: "need",
			value: !isValid && (contactData.need ? false : true),
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isValid])

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
							onChange={(e) => {
								dispatchContactData({
									type: "need",
									value: e.target.value,
								})

								dispatchIsInputErrors({
									type: "need",
									value: false,
								})
							}}
							className="peer hidden"
							name="need"
							value={service}
						/>

						<label
							htmlFor={service}
							className={`btn-border peer-checked:btn-border-active block ${
								isInputErrors.need && "border-red text-red"
							}`}
						>
							{service}
						</label>
					</div>
				))}
			</form>
		</>
	)
}
