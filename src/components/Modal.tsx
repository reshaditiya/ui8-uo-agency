"use client"

import { useRouter } from "next/navigation"
import { defaultAnimation, fadeAnimation } from "../app/utils/animation"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"

export default function Modal({
	title,
	description,
	isError = false,
	isModalOpen = false,
	closeHandler,
	nextRoute = "",
}: {
	title: string
	description: string
	isError?: Boolean
	isModalOpen: Boolean
	closeHandler: Function
	nextRoute?: string
}) {
	const router = useRouter()

	useEffect(() => {
		isModalOpen
			? document.body.classList.add("overflow-hidden")
			: document.body.classList.remove("overflow-hidden")
	}, [isModalOpen])

	function savelyClose() {
		closeHandler()
	}

	return (
		<AnimatePresence mode="wait">
			{isModalOpen && (
				<motion.div
					key="backdrop"
					className="fixed inset-0 z-20 flex items-center justify-center bg-black-100/40 backdrop-blur-sm"
					onClick={() => savelyClose()}
					variants={fadeAnimation}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					<motion.div
						key="modal-card"
						className="z-50 mx-[1.5rem] max-w-[30rem] -translate-x-1/2 rounded-[1.5rem] bg-white p-[1.5rem] md:p-[2rem]"
						onClick={(e) => e.stopPropagation()}
						variants={defaultAnimation}
						initial="initial"
						animate="animate"
						exit="exit"
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
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
