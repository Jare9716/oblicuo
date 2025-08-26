import Image from "next/image";

import { Card } from "@/components/card";

import { Instagram, Facebook, Mail } from "@/components/icons";

import { portfolio } from "@/libs/placeholder-data";

// Single HTTP image used everywhere (swap this later)
const IMG = "http://picsum.photos/1200/800";

// Navigation Component - Simplified without Get Quote button
function Navigation() {
	return (
		<nav className="absolute left-0 right-0 top-0 z-50 bg-transparent">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					<Image
						width={150}
						height={150}
						src={"/OblicuoNameWhite.png"}
						alt={"Oblicuo"}
						// style={{ objectFit: "cover" }}
					/>
					<div className="text-3xl font-bold tracking-tight text-white drop-shadow-lg">
						{/* Oblicuo */}
					</div>
					<div className="hidden items-center space-x-8 md:flex">
						<a
							href="#portfolio"
							className="drop-shadow text-white/90 transition-colors hover:text-white font-medium"
						>
							Portfolio
						</a>
						<a
							href="#about"
							className="drop-shadow text-white/90 transition-colors hover:text-white font-medium"
						>
							About
						</a>
						<a
							href="#contact"
							className="drop-shadow text-white/90 transition-colors hover:text-white font-medium"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

// Hero Section - Full width with text overlay
function HeroSection() {
	return (
		<section
			id="home"
			className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-fixed"
			style={{ backgroundImage: "url('/livingroom8.jpg')" }}
		>
			{/* Overlay for better text readability */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />

			{/* Content */}
			<div className="relative z-10 mx-auto max-w-6xl px-6 text-center lg:px-8">
				<h1 className="mb-8 text-5xl font-bold leading-tight text-white drop-shadow-2xl md:text-6xl lg:text-8xl">
					Crafting Elegant
					<br />
					<span className="text-white/80">Wooden Interiors</span>
				</h1>
				<p className="mx-auto max-w-4xl text-xl leading-relaxed text-white/90 drop-shadow-lg md:text-2xl">
					Bespoke architectural cabinetry that transforms spaces into
					atmospheric sanctuaries, where every detail reflects your unique
					vision and lifestyle.
				</p>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
				<div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50">
					<div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/50" />
				</div>
			</div>
		</section>
	);
}

// About Section - Without button
function AboutSection() {
	return (
		<section id="about" className="bg-white py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid items-center gap-16 lg:grid-cols-3">
					<div className="lg:col-span-1">
						<div className="space-y-6">
							<div className="text-sm font-semibold uppercase tracking-wider text-black">
								About Our Studio
							</div>
							<h2 className="text-4xl font-bold leading-tight text-black lg:text-5xl">
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
									Over 18 years of creating atmospheric interiors that stand the
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

// Portfolio Gallery
function PortfolioGallery() {
	const portfolioImages = Array(9).fill(IMG);

	return (
		<section id="portfolio" className="bg-gray-50 py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mb-16 text-center">
					<div className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
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
							className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
						>
							<Image
								className="h-full w-full bg-cover bg-center"
								fill={true}
								src={portfolio.url}
								alt={portfolio.name}
								style={{ objectFit: "cover" }}
							/>

							<div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
							<div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
								<Card className="border-0 bg-white/95 p-4 backdrop-blur-lg">
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

// Feature Section - Without button
function FeatureSection() {
	return (
		<section className="bg-white py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid items-center gap-16 lg:grid-cols-2">
					<div className="space-y-8">
						<div>
							<div className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
								Our Process
							</div>
							<h2 className="mb-6 text-4xl font-bold leading-tight text-black lg:text-5xl">
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
						<div className="aspect-[4/5] overflow-hidden rounded-3xl bg-cover bg-center shadow-2xl">
							<Image
								className="rounded-3xl bg-cover bg-center"
								fill={true}
								src={"/livingroom2.jpg"}
								alt={"wood plans"}
								style={{ objectFit: "cover" }}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

// Contact Section with Social Media Icons
function ContactSection() {
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

					{/* Social Media Icons */}
					<div className="flex items-center justify-center gap-8">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
						>
							<Facebook className="h-8 w-8 transition-transform group-hover:scale-110" />
						</a>

						<a
							href="https://www.instagram.com/oblicuo_australia/?utm_source=ig_web_button_share_sheet"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
						>
							<Instagram className="h-8 w-8 transition-transform group-hover:scale-110" />
						</a>

						<a
							href="https://mail.google.com/mail/?view=cm&to=oblicuoaustralia@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
						>
							<Mail className="h-8 w-8 transition-transform group-hover:scale-110" />
						</a>

						{/* <a
							href="tel:+61234567890"
							className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
						>
							<Phone className="h-8 w-8 transition-transform group-hover:scale-110" />
						</a> */}
					</div>
				</div>

				<div className="space-y-6 text-center">
					<div>
						<h3 className="mb-4 text-2xl font-semibold">Get Started Today</h3>
						<p className="mx-auto max-w-2xl leading-relaxed text-gray-300">
							Whether you're planning a complete home renovation or looking for
							custom cabinetry solutions, we're here to help bring your vision
							to life with our expert craftsmanship.
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

// Footer
function Footer() {
	return (
		<footer className="bg-gray-900 py-12 text-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<div className="mb-4 md:mb-0">
						<div className="mb-2 text-2xl font-bold">Oblicuo</div>
						<p className="text-gray-400">
							© 2025 Oblicuo. All rights reserved.
						</p>
					</div>
					<div className="flex space-x-6">
						<a
							href="#"
							className="text-gray-400 transition-colors hover:text-white"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-gray-400 transition-colors hover:text-white"
						>
							Terms of Service
						</a>
						<a
							href="#contact"
							className="text-gray-400 transition-colors hover:text-white"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default function ProfessionalCabinetryLanding() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />
			<HeroSection />
			<AboutSection />
			<PortfolioGallery />
			<FeatureSection />
			<ContactSection />
			<Footer />
		</div>
	);
}
