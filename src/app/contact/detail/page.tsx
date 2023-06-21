export default function page() {
	return (
		<>
			<h1 className="text-h2">
				Tell us a bit more about yourself and your company.
			</h1>
			<form className="mt-[2.5rem] grid grid-cols-2 gap-[0.75rem] md:gap-[1.5rem]">
				<label htmlFor="firstName" className="sr-only">
					First Name
				</label>
				<input
					id="firstName"
					name="firstName"
					type="text"
					className="input-text"
					placeholder="First name"
				/>

				<label htmlFor="lastName" className="sr-only">
					Last Name
				</label>
				<input
					id="lastName"
					name="lastName"
					type="text"
					className="input-text"
					placeholder="Last name"
				/>

				<label htmlFor="email" className="sr-only">
					Your email address
				</label>
				<input
					id="email"
					name="email"
					type="text"
					className="input-text col-span-2"
					placeholder="Your email address"
				/>

				<label htmlFor="company" className="sr-only">
					Your company name
				</label>
				<input
					id="company"
					name="company"
					type="text"
					className="input-text col-span-2"
					placeholder="Your company name"
				/>
			</form>
		</>
	)
}
