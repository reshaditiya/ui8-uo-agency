import "./globals.css"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Footer, Navbar } from "../components"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata = {
	title: "UO Agency",
	description: "Digital agency that will save your life",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${plusJakartaSans.className} text-black-100`}>
				<Navbar />
				<main className="mt-[7.5rem] md:mt-[6rem]">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
