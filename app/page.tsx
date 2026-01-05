import {
	Header,
	Hero,
	About,
	Portfolio,
	Process,
	Contact,
	Footer,
} from "@/components/sections";

export default function Home() {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<Hero />
			<About />
			<Portfolio />
			<Process />
			<Contact />
			<Footer />
		</div>
	);
}
