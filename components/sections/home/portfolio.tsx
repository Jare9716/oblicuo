import Image from "next/image";

import { portfolio } from "@/utils/placeholder-data";

import { Card } from "@/components/ui";

export function Portfolio() {
	return (
		<section id="portfolio" className="bg-gray-50 py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mb-16 text-center">
					<div className="mb-4 text-sm font-semibold tracking-wider text-black uppercase">
						Our Portfolio
					</div>
					<h2 className="mb-6 text-4xl font-bold text-black lg:text-5xl">
						Crafted with Precision
					</h2>
					<p className="mx-auto max-w-3xl text-xl text-gray-600">
						Every piece tells a story of meticulous craftsmanship and attention
						to detail
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{portfolio.map((portfolio, index) => (
						<div
							key={index}
							className="group relative aspect-4/3 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
						>
							<Image
								className="h-full w-full bg-cover bg-center"
								width={1024}
								height={768}
								src={portfolio.url}
								alt={portfolio.name}
								style={{ objectFit: "cover" }}
							/>

							<div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
							<div className="absolute right-4 bottom-4 left-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
								<Card className="gap-3 border-0 bg-white/95 p-4 backdrop-blur-lg">
									<h4 className="font-semibold text-black">{portfolio.name}</h4>
									<p className="text-sm text-gray-600">
										{portfolio.description}
									</p>
								</Card>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
