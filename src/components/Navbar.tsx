"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import path from "path"
import { useState } from "react"

interface Route {
	name: string
	route: string
}

interface DrawerProps {
	clickHandler: () => void
}

const routes: Route[] = [
	{ name: "Home", route: "/" },
	{ name: "About", route: "/about" },
	{ name: "Our Works", route: "/works" },
]

function Drawer({ clickHandler }: DrawerProps) {
	const pathname = usePathname()

	return (
		<div className="flex flex-col md:hidden">
			{routes.map((route) => {
				const isActive = pathname === route.route

				return (
					<Link
						key={route.route}
						href={route.route}
						onClick={clickHandler}
						className={`flex justify-center items-center text-sm py-3.5 font-medium hover:bg-neutral/10 active:bg-neutral/20 cursor-pointer select-none ${
							isActive && "font-bold"
						}`}
					>
						{route.name}
					</Link>
				)
			})}
			<Link
				key={"/contact"}
				href={"/contact"}
				onClick={clickHandler}
				className={`flex justify-center items-center text-sm py-3.5 font-semibold underline hover:bg-neutral/10 active:bg-neutral/20 cursor-pointer select-none ${
					pathname === "/contact" && "font-bold"
				}`}
			>
				Get in touch
			</Link>
		</div>
	)
}

export default function Navbar() {
	const pathname = usePathname()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<nav>
			<div className="flex justify-between items-center px-6 py-10 md:py-4">
				{/* logo */}
				<div className="relative h-[40px] w-[145px] md:h-[64px] md:w-[213px]">
					<Image
						src="/logo-text.svg"
						alt="UO Agency Logo"
						fill={true}
					/>
				</div>
				{/* desktop main menu */}
				{pathname !== "/contact" && (
					<div className="hidden md:flex gap-[4.5rem]">
						{routes.map((route) => {
							const isActive = pathname === route.route
							return (
								<Link
									key={route.route}
									href={route.route}
									className={`font-medium hover:text-neutral/70 active:text-neutral/50 cursor-pointer select-none ${
										isActive && "font-bold"
									}`}
								>
									{route.name}
								</Link>
							)
						})}
					</div>
				)}
				{/* desktop contact */}
				{pathname === "/contact" ? (
					<Link
						key="contact"
						href="/"
						className="hidden md:block font-semibold underline text-primary hover:text-primary/70 active:text-primary/50 cursor-pointer select-none"
					>
						Close
					</Link>
				) : (
					<Link
						key="contact"
						href="/contact"
						className="hidden md:block font-semibold underline hover:text-neutral/70 active:text-neutral/50 cursor-pointer select-none"
					>
						Get in touch
					</Link>
				)}

				{/* mobile hamburger or close */}
				{pathname === "/contact" ? (
					<Link
						key="contact"
						href="/"
						className="md:hidden text-sm font-semibold underline text-primary hover:text-primary/70 active:text-primary/50 cursor-pointer select-none"
					>
						Close
					</Link>
				) : (
					<button
						className="md:hidden"
						onClick={() => setIsMenuOpen((prevState) => !prevState)}
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
					</button>
				)}
			</div>

			{/* mobile drawer */}
			{isMenuOpen && <Drawer clickHandler={() => setIsMenuOpen(false)} />}
		</nav>
	)
}
