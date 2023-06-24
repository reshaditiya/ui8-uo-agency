import {
	Hero,
	CompanyCollaboration,
	Passion,
	Services,
	RecentWorks,
	Promise,
} from "../components/section/home"

export default function Home() {
	return (
		<>
			<Hero />
			<CompanyCollaboration />
			<Passion />
			<Services />
			<RecentWorks />
			<Promise />
		</>
	)
}
