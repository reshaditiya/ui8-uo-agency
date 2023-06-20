import Image from "next/image"

export default function Footer() {
	return (
		<footer
			style={{
				background:
					"linear-gradient(90deg, #8CA5FF -81.91%, rgba(255, 236, 214, 0.9) 52.5%, #92FCE9 171.84%)",
			}}
		>
			<div className="mx-auto flex max-w-[77.5rem] flex-col-reverse items-center justify-between gap-[11.69rem] px-[1.5rem] py-[4.5rem] md:flex-row md:gap-0">
				<figure className="relative h-[2.5rem] w-[9.06rem] md:h-[4rem] md:w-[13.31rem]">
					<Image src="/logo-text.svg" alt="UO Agency Logo" fill />
				</figure>
				<div className="max-w-[25rem] text-center text-[1.5rem] font-bold md:text-left md:text-[2.5rem]">
					Get in touch.{" "}
					<span className="text-black-50">Let’s work together.</span>
				</div>
			</div>
		</footer>
	)
}
