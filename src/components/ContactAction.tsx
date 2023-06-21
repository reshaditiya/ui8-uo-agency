const linkOrder = ["need", "detail", "info", "start"]
import Link from "next/link"

export default function ContactAction({ pathname }: { pathname: string }) {
	const currLinkIndex = linkOrder.findIndex((link) => link === pathname)

	return (
		<>
			<div className="mt-[5rem] flex items-center justify-between">
				<div className="flex gap-[0.75rem]">
					{linkOrder.map((link) => (
						<span
							key="link"
							className={`h-[0.5rem] w-[0.5rem] rounded-full ${
								pathname === link
									? "bg-black-100"
									: "bg-black-10"
							}`}
						/>
					))}
				</div>
				<div className="flex gap-[1rem]">
					{currLinkIndex !== 0 && (
						<Link href={linkOrder[currLinkIndex - 1] || ""}>
							<button className="btn-gray">Back</button>
						</Link>
					)}
					<Link href={linkOrder[currLinkIndex + 1] || ""}>
						<button className="btn-blue">
							{currLinkIndex === linkOrder.length - 1
								? "Submit"
								: "Next"}
						</button>
					</Link>
				</div>
			</div>
			{currLinkIndex === linkOrder.length - 1 && (
				<p className="text-sm mt-[1.5rem] text-black-70">
					By clicking Submit, you agree to our Privacy Policy, and
					allow UO Agency to use this information for marketing
					purposes.
				</p>
			)}
		</>
	)
}
