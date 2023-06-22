"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { ContactAction } from "@/src/components"
import { useReducer } from "react"
import { ContactDataContext } from "@/src/components/Contexts"

type ImageLayout = {
	[key: string]: string
}

type ContactDataState = {
	need: string
	firstName: string
	lastName: string
	email: string
	company: string
	description: string
	budget: string
	projectTime: string
}

type ContactDataAction = {
	type:
		| "need"
		| "firstName"
		| "lastName"
		| "email"
		| "company"
		| "description"
		| "budget"
		| "projectTime"
	value?: string
}

const contactDataInit = {
	need: "",
	firstName: "",
	lastName: "",
	email: "",
	company: "",
	description: "",
	budget: "",
	projectTime: "",
}

const imageLayout: ImageLayout = {
	need: "/images/work.webp",
	detail: "/images/yourself.webp",
	info: "/images/company.webp",
	start: "/images/prism.webp",
}

function reducerContactData(
	state: ContactDataState,
	action: ContactDataAction
) {
	return {
		...state,
		[action.type]: action.value,
	}
}

function validateEmail(email: string) {
	if (!email) return false
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	return regex.test(String(email).toLowerCase())
}

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname =
		usePathname().replaceAll("/", "").replace("contact", "") || "need"
	const imageSrc = imageLayout[pathname]

	const [contactData, dispatchContactData] = useReducer(
		reducerContactData,
		contactDataInit
	)

	function validateData() {
		switch (pathname) {
			case "need":
				return contactData.need ? true : false
				break
			case "detail":
				return contactData.firstName &&
					contactData.lastName &&
					validateEmail(contactData.email) &&
					contactData.company
					? true
					: false
				break
			case "info":
				return contactData.description && contactData.budget
					? true
					: false
			case "start":
				return contactData.projectTime ? true : false

			default:
				break
		}
	}

	return (
		<section className="mx-auto mb-[5rem] flex max-w-[77.5rem] gap-[2.5rem] px-[1.5rem]">
			<section className="mx-auto mt-[3.75rem] flex-1 md:mt-[5rem]">
				<ContactDataContext.Provider
					value={{ getter: contactData, setter: dispatchContactData }}
				>
					{children}
				</ContactDataContext.Provider>
				<ContactAction pathname={pathname} handleClick={validateData} />
			</section>
			<figure className="relative hidden flex-1 md:block">
				<Image src={imageSrc} fill alt="" className="object-cover" />
			</figure>
		</section>
	)
}
