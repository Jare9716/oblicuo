import { Oblicuo } from "@/components/icons";

export function Footer() {
	return (
		<footer className="bg-gray-900 py-12 text-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<div className="mb-4 md:mb-0">
						<Oblicuo className="mb-2 w-30 text-white" />
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
