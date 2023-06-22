"use client"

import { useContext } from "react"
import { ContactDataContext } from "@/src/components/Contexts"

export default function Page() {
	const { getter: contactData, setter: dispatchContactData }: any =
		useContext(ContactDataContext)

	return (
		<>
			<h1 className="text-h2">
				Tell us a bit more about yourself and your company.
			</h1>
			<form className="mt-[2.5rem] grid grid-cols-2 gap-[0.75rem] md:gap-[1.5rem]">
				<label htmlFor="firstName" className="sr-only">
					First Name
				</label>
				<input
					id="firstName"
					name="firstName"
					type="text"
					className="input-text"
					placeholder="First name"
					value={contactData.firstName}
					onChange={(e) =>
						dispatchContactData({
							type: "firstName",
							value: e.target.value,
						})
					}
				/>

				<label htmlFor="lastName" className="sr-only">
					Last Name
				</label>
				<input
					id="lastName"
					name="lastName"
					type="text"
					className="input-text"
					placeholder="Last name"
					value={contactData.lastName}
					onChange={(e) =>
						dispatchContactData({
							type: "lastName",
							value: e.target.value,
						})
					}
				/>

				<label htmlFor="email" className="sr-only">
					Your email address
				</label>
				<input
					id="email"
					name="email"
					type="email"
					className="input-text col-span-2"
					placeholder="Your email address"
					value={contactData.email}
					onChange={(e) =>
						dispatchContactData({
							type: "email",
							value: e.target.value,
						})
					}
				/>

				<label htmlFor="company" className="sr-only">
					Your company name
				</label>
				<input
					id="company"
					name="company"
					type="text"
					className="input-text col-span-2"
					placeholder="Your company name"
					value={contactData.company}
					onChange={(e) =>
						dispatchContactData({
							type: "company",
							value: e.target.value,
						})
					}
				/>
			</form>
		</>
	)
}
