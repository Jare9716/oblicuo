import Image from "next/image";

export function Hero() {
	return (
		<section
			id="home"
			className="relative flex min-h-screen items-center justify-center bg-cover bg-fixed bg-center"
		>
			<Image
				src={"/livingroom1.png"}
				alt="Background image"
				fill
				className="object-cover"
				priority
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/80" />
			<div className="relative z-10 mx-auto max-w-6xl px-6 text-center lg:px-8">
				<h1 className="mb-8 text-5xl leading-tight font-bold text-white drop-shadow-2xl md:text-6xl lg:text-8xl">
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

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
				<div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50">
					<div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/50" />
				</div>
			</div>
		</section>
	);
}
