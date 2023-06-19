import Image from "next/image"

export default function Footer() {
	return (
		<footer
			style={{
				background:
					"linear-gradient(90deg, #8CA5FF -81.91%, rgba(255, 236, 214, 0.9) 52.5%, #92FCE9 171.84%)",
			}}
		>
			<div className="max-w-[1240px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-[11.5rem] md:gap-0 py-[4.5rem] px-6">
				<div className="relative h-[40px] w-[145px] md:h-[64px] md:w-[213px]">
					<Image src="/logo-text.svg" alt="UO Agency Logo" fill />
				</div>
				<div className="max-w-[25rem] font-bold text-2xl md:text-4xl text-center md:text-left">
					Get in touch.
					<span className="text-neutral/50">
						Let’s work together.
					</span>
				</div>
			</div>
		</footer>
	)
}
