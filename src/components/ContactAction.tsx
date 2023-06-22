"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

const linkOrder = ["need", "detail", "info", "start"]

export default function ContactAction({
	pathname,
	validateData,
	setIsValid,
	isValid,
}: {
	pathname: string
	validateData: Function
	setIsValid: Function
	isValid: Boolean
}) {
	const currLinkIndex = linkOrder.findIndex((link) => link === pathname)
	const router = useRouter()
	const isFirstLoad = useRef(true)

	function handleSubmit() {
		if (validateData()) {
			setIsValid(true)
		} else {
			setIsValid(false)
		}
	}

	useEffect(() => {
		if (isFirstLoad.current) {
			isFirstLoad.current = false
			return
		}

		isValid && router.push(linkOrder[currLinkIndex + 1] || "")
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isValid])

	return (
		<>
			<div className="mt-[5rem] flex items-center justify-between">
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
					<button className="btn-blue" onClick={handleSubmit}>
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
