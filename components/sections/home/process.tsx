import Image from "next/image";

export function Process() {
	return (
		<section className="bg-white py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid items-center gap-16 lg:grid-cols-2">
					<div className="space-y-8">
						<div>
							<div className="mb-4 text-sm font-semibold tracking-wider text-black uppercase">
								Our Process
							</div>
							<h2 className="mb-6 text-4xl leading-tight font-bold text-black lg:text-5xl">
								Innovative Designs,
								<br />
								<span className="text-gray-500">Timeless Craft</span>
							</h2>
							<p className="text-xl leading-relaxed text-gray-600">
								Our bespoke wooden interiors are crafted with precision and
								care, ensuring a perfect blend of functionality and aesthetics
								that creates the perfect atmosphere for your home.
							</p>
						</div>

						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
									1
								</div>
								<div>
									<h4 className="mb-2 font-semibold text-black">
										Design Consultation
									</h4>
									<p className="text-gray-600">
										We understand your vision and space requirements
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
									2
								</div>
								<div>
									<h4 className="mb-2 font-semibold text-black">
										Custom Design
									</h4>
									<p className="text-gray-600">
										Detailed plans tailored to your specific needs
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
									3
								</div>
								<div>
									<h4 className="mb-2 font-semibold text-black">
										Expert Craftsmanship
									</h4>
									<p className="text-gray-600">
										Handcrafted with premium materials and techniques
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="relative">
						<div className="aspect-4/5 overflow-hidden rounded-3xl bg-cover bg-center shadow-2xl">
							<Image
								className="rounded-3xl bg-cover bg-center"
								fill={true}
								src={"/livingroom2.jpg"}
								alt={"wood plans"}
								style={{ objectFit: "cover" }}
							/>
							<div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/30 to-transparent" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
