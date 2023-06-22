const projectTime = ["1 Month", "2 Months", "3 Months"]

export default function page() {
	return (
		<>
			<h1 className="text-h2">
				When do you expect to start the project.
			</h1>
			<form className="mt-[2.5rem] flex flex-col gap-[1.5rem] md:gap-[2.25rem]">
				<div className="flex flex-col gap-[1rem]">
					<label className="text-body" htmlFor="budget">
						Time to start project
					</label>
					<div
						id="budget"
						className="flex flex-wrap gap-[0.63rem] md:gap-[1rem]"
					>
						{projectTime.map((time) => (
							<div key={time}>
								<input
									id={time}
									type="radio"
									className="btn-border peer hidden"
									name="projectTime"
								/>

								<label
									htmlFor={time}
									className="btn-border peer-checked:btn-border-active block"
								>
									{time}
								</label>
							</div>
						))}
					</div>
					<label
						htmlFor="else"
						className="text-body flex flex-col gap-[1rem]"
					>
						Anything else?
						<textarea
							id="else"
							name="else"
							className="input-text"
							placeholder="Whatever else there is to share, please do let us know here."
						/>
					</label>
				</div>
			</form>
		</>
	)
}