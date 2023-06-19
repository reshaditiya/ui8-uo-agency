import "./globals.css"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Footer, Navbar } from "../components"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${plusJakartaSans.className} text-neutral`}>
				<Navbar />
				<main className="max-w-7xl mx-auto mt-[120px]">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
