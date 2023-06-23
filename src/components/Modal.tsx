"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Modal({
	title,
	description,
	isError = false,
	closeHandler,
	nextRoute = "",
}: {
	title: string
	description: string
	isError?: Boolean
	closeHandler: Function
	nextRoute?: string
}) {
	const router = useRouter()

	document.body.classList.add("overflow-hidden")

	function savelyClose() {
		document.body.classList.remove("overflow-hidden")

		closeHandler()
	}

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black-100/20"
			onClick={() => savelyClose()}
		>
			<div
				className="mx-[1.5rem] max-w-[30rem] rounded-[1.5rem] bg-white p-[1.5rem]"
				onClick={(e) => e.stopPropagation()}
			>
				<h1 className="text-h3">{title}</h1>
				<p className="text-sm mt-[1rem]">{description}</p>
				<div className="mt-[4rem] flex justify-end gap-[0.63rem] md:gap-[1rem]">
					<button
						className="btn-gray"
						onClick={() => {
							savelyClose()
							!isError && router.push(nextRoute)
						}}
					>
						{isError ? "Cancel" : "Close"}
					</button>
					{isError && (
						<button
							className="btn-red"
							onClick={() => {
								savelyClose()
								nextRoute && router.push(nextRoute)
							}}
						>
							Discard
						</button>
					)}
				</div>
			</div>
		</div>
	)
}
