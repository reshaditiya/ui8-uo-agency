"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { ContactAction } from "@/src/components"
import { createContext } from "react"

type ImageLayout = {
	[key: string]: string
}

const imageLayout: ImageLayout = {
	need: "/images/work.webp",
	detail: "/images/yourself.webp",
	info: "/images/company.webp",
	start: "/images/prism.webp",
}

export default function ContactLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: {
		tag: string
		item: string
	}
}) {
	const pathname =
		usePathname().replaceAll("/", "").replace("contact", "") || "need"
	const imageSrc = imageLayout[pathname]

	return (
		<section className="mx-auto mb-[5rem] flex max-w-[77.5rem] gap-[2.5rem] px-[1.5rem]">
			<section className="mx-auto mt-[3.75rem] flex-1 md:mt-[5rem]">
				{children}
				<ContactAction pathname={pathname} />
			</section>
			<figure className="relative hidden flex-1 md:block">
				<Image src={imageSrc} fill alt="" className="object-cover" />
			</figure>
		</section>
	)
}
