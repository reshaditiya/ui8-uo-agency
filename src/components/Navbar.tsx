"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useReducer, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Route {
	name: string
	route: string
}

interface DrawerProps {
	handleClose: () => void
}

const routes: Route[] = [
	{ name: "Home", route: "/" },
	{ name: "About", route: "/about" },
	{ name: "Our Works", route: "/works" },
]

function Drawer({ handleClose }: DrawerProps) {
	const pathname = usePathname()
	const animateNav = {
		initial: {
			opacity: 0,
			y: -16,
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

	return (
		<>
			{/* menu */}
			<motion.ul
				className="absolute left-0 right-0 flex flex-col md:hidden bg-white pb-[2rem] z-10"
				variants={animateNav}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				{routes.map((route) => {
					const isActive = pathname === route.route
					const navItemClass = `flex justify-center items-center py-[0.88rem] hover:bg-black-10 active:bg-black-30 cursor-pointer select-none ${
						isActive ? "font-bold" : "font-medium"
					}`

					return isActive ? (
						<button key={route.route} className={navItemClass}>
							{route.name}
						</button>
					) : (
						<Link
							key={route.route}
							href={route.route}
							className={navItemClass}
						>
							{route.name}
						</Link>
					)
				})}
				<li key={"/contact"}>
					<Link
						href={"/contact"}
						className="flex justify-center items-center py-[0.88rem] font-semibold underline hover:bg-black-10 active:bg-black-30 cursor-pointer select-none"
					>
						Get in touch
					</Link>
				</li>
			</motion.ul>

			{/* backdrop */}
			<motion.div
				className="fixed w-full h-screen bg-black-100/20"
				onClick={handleClose}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			></motion.div>
		</>
	)
}

export default function Navbar() {
	const pathname = usePathname()
	const navReducer = (state: any, action: any) => {
		switch (action) {
			case "open": {
				document.body.classList.add("overflow-hidden")
				return true
			}
			case "close": {
				document.body.classList.remove("overflow-hidden")
				return false
			}
		}
	}
	const [isNavOpen, navDispatch] = useReducer(navReducer, false)

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
	const animateNavLink = {
		initial: {
			opacity: 0,
			transition: {
				type: "spring",
				duration: 0.2,
			},
		},
		animate: {
			opacity: 1,
			transition: {
				type: "spring",
				duration: 0.2,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				type: "spring",
				duration: 0.2,
			},
		},
	}

	// close modal when route change
	useEffect(() => {
		navDispatch("close")
	}, [pathname])

	return (
		<nav className="w-full max-w-[77.5rem] left-1/2 -translate-x-1/2 fixed top-0 bg-white z-10">
			<div className="flex justify-between items-center py-[2.5rem] md:py-[1rem] px-[1.5rem]">
				{/* logo */}
				<AnimatePresence>
					<motion.div
						className="relative h-[2.5rem] w-[9.06rem] md:h-[4rem] md:w-[13.31rem] select-none"
						variants={animateNavLink}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<Link href="/">
							<Image
								src="/logo-text.svg"
								alt="UO Agency Logo"
								fill={true}
							/>
						</Link>
					</motion.div>
				</AnimatePresence>
				{/* desktop main menu */}
				<AnimatePresence mode="wait">
					{pathname !== "/contact" && (
						<motion.div
							key="main-menu"
							className="hidden md:flex gap-[4.5rem]"
							variants={animateNavLink}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							{routes.map((route) => {
								const isActive = pathname === route.route
								return (
									<Link
										key={route.route}
										href={route.route}
										className={`hover:text-black-70 active:text-black-50 cursor-pointer select-none ${
											isActive
												? "font-bold"
												: "font-medium"
										}`}
									>
										{route.name}
									</Link>
								)
							})}
						</motion.div>
					)}
					{/* desktop contact */}
					{pathname === "/contact" ? (
						<motion.div
							key="close-contact"
							className="hidden md:block font-semibold underline text-blue-100 hover:text-blue-70 active:text-blue-50 cursor-pointer select-none"
							variants={animateNavLink}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<Link href="/">Close</Link>
						</motion.div>
					) : (
						<motion.div
							key="contact"
							className="hidden md:block font-semibold underline hover:text-black-70 active:text-black-50 cursor-pointer select-none"
							variants={animateNavLink}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<Link href="/contact">Get in touch</Link>
						</motion.div>
					)}
				</AnimatePresence>

				{/* mobile hamburger or close */}
				<AnimatePresence mode="wait">
					{pathname === "/contact" ? (
						<motion.span
							key="close_link"
							className="md:hidden font-semibold underline text-blue-100 hover:text-blue-70 active:text-blue-50 cursor-pointer select-none"
							variants={animateNavLink}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<Link key="contact" href="/">
								Close
							</Link>
						</motion.span>
					) : isNavOpen && pathname !== "/contact" ? (
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
								className="w-6 h-6"
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
								className="w-6 h-6"
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
