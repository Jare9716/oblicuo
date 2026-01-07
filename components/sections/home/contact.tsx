import { Instagram, Facebook, Mail, Phone } from "@/components/icons";

export function Contact() {
	return (
		<section id="contact" className="bg-black py-24 text-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h2 className="mb-6 text-4xl font-bold lg:text-5xl">
						Ready to Create Your Dream Space?
					</h2>
					<p className="mx-auto mb-12 max-w-3xl text-xl text-gray-300">
						Get in touch with us to discuss your project and discover how we can
						transform your vision into reality.
					</p>

					<div className="flex items-center justify-center gap-8">
						<a
							href="tel:+61415482476"
							className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
						>
							<Phone className="h-8 w-8 transition-transform group-hover:scale-110" />
						</a>
						<a
							href="mailto:design@oblicuo.com"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
						>
							<Mail className="h-8 w-8 transition-transform group-hover:scale-110" />
						</a>
						<a
							href="https://www.instagram.com/oblicuo_australia/?utm_source=ig_web_button_share_sheet"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
						>
							<Instagram className="h-8 w-8 transition-transform group-hover:scale-110" />
						</a>
						{/* <a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
						>
							<Facebook className="h-8 w-8 transition-transform group-hover:scale-110" />
						</a> */}
					</div>
				</div>

				<div className="space-y-6 text-center">
					<div>
						<h3 className="mb-4 text-2xl font-semibold">Get Started Today</h3>
						<p className="mx-auto max-w-2xl leading-relaxed text-gray-300">
							{
								"Whether you're planning a complete home renovation or looking for custom cabinetry solutions, we're here to help bring your vision to life with our expert craftsmanship."
							}
						</p>
					</div>

					<div className="flex flex-col items-center justify-center gap-8 pt-8 md:flex-row">
						<div className="flex items-center space-x-3">
							<div className="h-2 w-2 rounded-full bg-white" />
							<span className="text-gray-300">
								Free consultation and design quote
							</span>
						</div>
						<div className="flex items-center space-x-3">
							<div className="h-2 w-2 rounded-full bg-white" />
							<span className="text-gray-300">
								Premium Australian materials
							</span>
						</div>
						<div className="flex items-center space-x-3">
							<div className="h-2 w-2 rounded-full bg-white" />
							<span className="text-gray-300">
								Expert craftsmanship guarantee
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
