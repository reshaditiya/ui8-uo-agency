"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { useReducer } from "react"
import { contactDataContext } from "@/src/app/utils/contexts"
import { motion, AnimatePresence } from "framer-motion"
import { defaultAnimation } from "../utils/animation"

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

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname().replaceAll("/", "").replace("contact", "")
	const imageSrc = imageLayout[pathname]
	const [contactData, dispatchContactData] = useReducer(
		reducerContactData,
		contactDataInit
	)

	return (
		<section className="mx-auto mb-[5rem] flex max-w-[77.5rem] gap-[2.5rem] px-[1.5rem]">
			<section className="mx-auto mt-[3.75rem] flex-1 md:mt-[5rem]">
				<contactDataContext.Provider
					value={{
						getter: contactData,
						setter: dispatchContactData,
					}}
				>
					<AnimatePresence mode="wait">
						<motion.section
							className=""
							key="contact"
							variants={defaultAnimation}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							{children}
						</motion.section>
					</AnimatePresence>
				</contactDataContext.Provider>
			</section>
			<figure className="relative hidden flex-1 md:block">
				<Image src={imageSrc} fill alt="" className="object-cover" />
			</figure>
		</section>
	)
}
