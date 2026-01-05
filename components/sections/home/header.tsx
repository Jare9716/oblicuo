import { Oblicuo } from "@/components/icons";

export function Header() {
	return (
		<nav className="absolute top-0 right-0 left-0 z-50 bg-transparent">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="flex items-center justify-between pt-6">
					<div>
						<Oblicuo className="w-39 text-white" />
					</div>

					<div className="hidden items-center space-x-8 md:flex">
						<a
							href="#about"
							className="font-medium text-white/90 drop-shadow transition-colors hover:text-white"
						>
							About
						</a>
						<a
							href="#portfolio"
							className="font-medium text-white/90 drop-shadow transition-colors hover:text-white"
						>
							Portfolio
						</a>
						<a
							href="#contact"
							className="font-medium text-white/90 drop-shadow transition-colors hover:text-white"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
