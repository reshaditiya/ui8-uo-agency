"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useReducer, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Modal } from "./"
import { fadeAnimation } from "../app/utils/animation"
import { trapTabKey } from "../app/utils"

type Route = {
	name: string
	route: string
}

type DrawerProps = {
	handleClose: () => void
}

const routes: Route[] = [
	{ name: "Home", route: "/" },
	{ name: "About", route: "/about" },
	{ name: "Our Works", route: "/works" },
]

// animation
const animateIcon = {
	initial: {
		opacity: 0,
		rotate: -45,
		transition: {
			type: "spring",
			duration: 0.2,
		},
	},
	animate: {
		opacity: 1,
		rotate: 0,
		transition: {
			type: "spring",
			duration: 0.2,
		},
	},
	exit: {
		opacity: 0,
		rotate: 45,
		transition: {
			type: "spring",
			duration: 0.2,
		},
	},
}

const animateNav = {
	initial: {
		opacity: 0,
		y: -24,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
	exit: {
		opacity: 0,
		y: -16,
	},
}
function Drawer({ handleClose }: DrawerProps) {
	const pathname = usePathname()

	return (
		<>
			<motion.ul
				key="drawer"
				className="absolute left-0 right-0 z-10 flex flex-col bg-white pb-[2rem] md:hidden"
				variants={animateNav}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				{routes.map((route) => {
					const isActive = pathname === route.route

					return isActive ? (
						<button
							key={route.route}
							className={`text-sm flex cursor-pointer select-none items-center justify-center py-[0.88rem] transition-all hover:bg-black-10 active:bg-black-30 ${
								isActive ? "font-bold" : "font-medium"
							}`}
						>
							{route.name}
						</button>
					) : (
						<Link
							key={route.route}
							href={route.route}
							className={`text-sm flex cursor-pointer select-none items-center justify-center py-[0.88rem] transition-all hover:bg-black-10 active:bg-black-30 ${
								isActive ? "font-bold" : "font-medium"
							}`}
						>
							{route.name}
						</Link>
					)
				})}
				<li key={"/contact"}>
					<Link
						href={"/contact"}
						className="text-sm flex cursor-pointer select-none items-center justify-center py-[0.88rem] font-semibold underline hover:bg-black-10 active:bg-black-30"
					>
						Get in touch
					</Link>
				</li>
			</motion.ul>

			{/* backdrop */}
			<motion.div
				key="backdrop"
				className="fixed h-screen w-full bg-black-100/40 backdrop-blur-sm"
				onClick={handleClose}
				variants={fadeAnimation}
				initial="initial"
				animate="animate"
				exit="exit"
			></motion.div>
		</>
	)
}

export default function Navbar() {
	const pathname = usePathname()
	const navReducer = (state: any, action: string) => {
		switch (action) {
			case "open": {
				return true
			}
			case "close": {
				return false
			}
		}
	}
	const [isNavOpen, navDispatch] = useReducer(navReducer, false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const firstFocus = useRef<HTMLButtonElement>(null)

	function handleEsc(e: KeyboardEvent) {
		if (e.key === "Escape") {
			navDispatch("close")
		}
	}

	// close modal when route change
	useEffect(() => {
		navDispatch("close")
	}, [pathname])

	useEffect(() => {
		if (isNavOpen) {
			document.body.classList.add("overflow-hidden")
			firstFocus.current?.focus()
			document.addEventListener("keydown", handleEsc)
		} else {
			document.body.classList.remove("overflow-hidden")
		}
	}, [isNavOpen])

	return (
		<nav
			className="fixed top-0 z-10 w-full bg-white"
			onKeyDown={trapTabKey}
		>
			<Modal
				title="Are you sure you want to close?"
				description="Closing the form will discard all the data you have input?"
				isError={true}
				closeHandler={() => setIsModalOpen(false)}
				isModalOpen={isModalOpen}
				nextRoute={"/"}
			/>
			<div className="mx-auto flex max-w-[77.5rem] items-center justify-between px-[1.5rem] py-[2.5rem] md:py-[1rem]">
				{/* logo */}
				<Link
					href="/"
					className="relative h-[2.5rem] w-[9.06rem] select-none md:h-[4rem] md:w-[13.31rem]"
				>
					<Image
						src="/logo-text.svg"
						alt="UO Agency Logo"
						fill={true}
					/>
				</Link>
				{/* desktop main menu */}
				{!pathname.startsWith("/contact") && (
					<div
						key="main-menu"
						className="hidden gap-[4.5rem] md:flex"
					>
						{routes.map((route) => {
							const isActive = pathname === route.route
							return isActive ? (
								<span
									key={route.route}
									className="text-sm cursor-pointer select-none font-bold hover:text-black-70
											active:text-black-50"
								>
									{route.name}
								</span>
							) : (
								<Link
									key={route.route}
									href={route.route}
									className="text-sm cursor-pointer select-none font-medium hover:text-black-70
											active:text-black-50"
								>
									{route.name}
								</Link>
							)
						})}
					</div>
				)}
				{/* desktop contact */}
				{pathname.startsWith("/contact") ? (
					<div
						key="close-contact"
						className="text-sm hidden cursor-pointer select-none font-semibold text-blue-100 underline hover:text-blue-70 active:text-blue-50 md:block"
					>
						<button
							key="contact"
							onClick={() => setIsModalOpen(true)}
						>
							Close
						</button>
					</div>
				) : (
					<div
						key="contact"
						className="text-sm hidden cursor-pointer select-none font-semibold underline hover:text-black-70 active:text-black-50 md:block"
					>
						<Link href="/contact">Get in touch</Link>
					</div>
				)}

				{/* mobile hamburger or close */}
				<AnimatePresence mode="wait">
					{pathname.startsWith("/contact") ? (
						<motion.span
							key="close_link"
							className="text-sm cursor-pointer select-none font-semibold text-blue-100 underline hover:text-blue-70 active:text-blue-50 md:hidden"
						>
							<button
								key="contact"
								onClick={() => setIsModalOpen(true)}
							>
								Close
							</button>
						</motion.span>
					) : isNavOpen && !pathname.startsWith("/contact") ? (
						<motion.button
							key="close_btn"
							className="md:hidden"
							onClick={() => navDispatch("close")}
							variants={animateIcon}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</motion.button>
					) : (
						<motion.button
							key="hamburger"
							className="md:hidden"
							onClick={() => navDispatch("open")}
							variants={animateIcon}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</motion.button>
					)}
				</AnimatePresence>
			</div>

			{/* mobile drawer */}
			<AnimatePresence>
				{isNavOpen && (
					<Drawer handleClose={() => navDispatch("close")} />
				)}
			</AnimatePresence>
		</nav>
	)
}
