import Image from "next/image"

export default function Footer() {
	return (
		<footer
			style={{
				background:
					"linear-gradient(90deg, #8CA5FF -81.91%, rgba(255, 236, 214, 0.9) 52.5%, #92FCE9 171.84%)",
			}}
			className="max-w-[77.5rem] mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-[11.69rem] md:gap-0 py-[4.5rem] px-[1.5rem]"
		>
			<div className="relative h-[2.5rem] w-[9.06rem] md:h-[4rem] md:w-[13.31rem]">
				<Image src="/logo-text.svg" alt="UO Agency Logo" fill />
			</div>
			<div className="max-w-[25rem] font-bold text-[1.5rem] md:text-[2.5rem] text-center md:text-left">
				Get in touch.{" "}
				<span className="text-black-50">Let’s work together.</span>
			</div>
		</footer>
	)
}
