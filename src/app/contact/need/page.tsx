const services = [
	"Branding",
	"Web Design",
	"App Design",
	"Dashboard Design",
	"SAAS",
	"Development",
	"Graphic Design",
	"Fintech",
	"Presentation",
]

export default function page() {
	return (
		<>
			<h1 className="text-h2">What do you need help with from us?</h1>
			<div className="mt-[2.5rem] flex flex-wrap gap-[0.75rem] md:gap-[1.5rem]">
				{services.map((service) => (
					<button key={service} className="btn-border">
						{service}
					</button>
				))}
			</div>
		</>
	)
}
