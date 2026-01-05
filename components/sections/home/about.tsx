export function About() {
	return (
		<section id="about" className="bg-white py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid items-center gap-16 lg:grid-cols-3">
					<div className="lg:col-span-1">
						<div className="space-y-6">
							<div className="text-sm font-semibold tracking-wider text-black uppercase">
								About Our Studio
							</div>
							<h2 className="text-4xl leading-tight font-bold text-black lg:text-5xl">
								Where Design
								<br />
								Meets
								<br />
								<span className="text-gray-500">Craftsmanship</span>
							</h2>
						</div>
					</div>

					<div className="space-y-8 lg:col-span-2">
						<p className="text-xl leading-relaxed text-gray-600">
							Our bespoke wooden interiors are crafted with precision and care,
							ensuring a perfect blend of functionality and aesthetics that
							transforms houses into homes.
						</p>
						<div className="grid gap-8 md:grid-cols-2">
							<div>
								<h4 className="mb-3 font-semibold text-black">
									Australian Heritage
								</h4>
								<p className="text-gray-600">
									Proudly serving Australian homes with locally sourced
									materials and traditional craftsmanship techniques.
								</p>
							</div>
							<div>
								<h4 className="mb-3 font-semibold text-black">
									Established Excellence
								</h4>
								<p className="text-gray-600">
									Over 7 years of creating atmospheric interiors that stand the
									test of time.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
