"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { Modal } from "./"

const linkOrder = ["need", "detail", "info", "start"]

export default function ContactAction({
	clickHandler,
}: {
	clickHandler: Function
}) {
	const router = useRouter()
	const pathname = usePathname().replaceAll("/", "").replace("contact", "")
	const currLinkIndex = linkOrder.findIndex((link) => link === pathname)
	const [isModalOpen, setIsModalOpen] = useState(false)

	function nextButtonHandle() {
		if (clickHandler()) {
			if (currLinkIndex === linkOrder.length - 1) {
				setIsModalOpen(true)
			} else {
				router.push(linkOrder[currLinkIndex + 1] || "")
			}
		}
	}

	return (
		<>
			{isModalOpen && (
				<Modal
					title="Your submission has been sent"
					description="Thanks for contacting us we’ll reach you out pretty soon"
					closeHandler={() => setIsModalOpen(false)}
					nextRoute={"/"}
					isModalOpen={isModalOpen}
				/>
			)}
			<div className="col-span-full mt-[5rem] flex w-full items-center justify-between">
				<div className="flex gap-[0.75rem]">
					{linkOrder.map((link) => (
						<span
							key={link}
							className={`h-[0.5rem] w-[0.5rem] rounded-full ${
								pathname === link
									? "bg-black-100"
									: "bg-black-10"
							}`}
						/>
					))}
				</div>
				<div className="flex gap-[1rem]">
					{currLinkIndex !== 0 && (
						<Link
							className="btn-gray"
							href={linkOrder[currLinkIndex - 1] || ""}
						>
							Back
						</Link>
					)}
					<button
						className="btn-blue"
						onClick={() => nextButtonHandle()}
					>
						{currLinkIndex === linkOrder.length - 1
							? "Submit"
							: "Next"}
					</button>
				</div>
			</div>
			{currLinkIndex === linkOrder.length - 1 && (
				<p className="text-sm mt-[1.5rem] text-black-70">
					By clicking Submit, you agree to our Privacy Policy, and
					allow UO Agency to use this information for marketing
					purposes.
				</p>
			)}
		</>
	)
}
