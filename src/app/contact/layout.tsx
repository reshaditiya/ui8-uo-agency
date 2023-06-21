"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { ContactAction } from "@/src/components"
import { useReducer } from "react"
import { ContactDataContext } from "@/src/components/Contexts"

type ImageLayout = {
	[key: string]: string
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

function reducerContactData(
	state: ContactDataState,
	action: ContactDataAction
) {
	return {
		...state,
		[action.type]: action.value,
	}
}

const imageLayout: ImageLayout = {
	need: "/images/work.webp",
	detail: "/images/yourself.webp",
	info: "/images/company.webp",
	start: "/images/prism.webp",
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

	return (
		<section className="mx-auto mb-[5rem] flex max-w-[77.5rem] gap-[2.5rem] px-[1.5rem]">
			<section className="mx-auto mt-[3.75rem] flex-1 md:mt-[5rem]">
				<ContactDataContext.Provider
					value={{ getter: contactData, setter: dispatchContactData }}
				>
					{children}
				</ContactDataContext.Provider>
				<ContactAction pathname={pathname} />
			</section>
			<figure className="relative hidden flex-1 md:block">
				<Image src={imageSrc} fill alt="" className="object-cover" />
			</figure>
		</section>
	)
}
