import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Oblicuo | Architectural Cabinetry in Melbourne",
	description:
		"Oblicuo designs and builds high-quality, custom kitchens, bathroom vanities, and wardrobes in Melbourne. Elegant, minimalist, and luxurious cabinetry tailored to your needs.",
	keywords: [
		"architectural cabinetry",
		"custom kitchens Melbourne",
		"bathroom vanities Melbourne",
		"luxury wardrobes",
		"custom furniture Melbourne",
		"minimalist cabinetry",
		"high-end furniture Australia",
	],
	metadataBase: new URL("https://oblicuo.vercel.app"),
	alternates: {
		canonical: "/",
	},
	authors: [{ name: "Oblicuo" }],
	openGraph: {
		title: "Oblicuo | Architectural Cabinetry in Melbourne",
		description:
			"Elegant, high-quality cabinetry and custom furniture for kitchens, bathrooms, and wardrobes in Melbourne. Sophisticated, minimalist, and made to fit your lifestyle.",
		siteName: "Oblicuo",
		locale: "en_AU",
		type: "website",
		// images: [
		// 	{
		// 		url: "https://oblicuo.vercel.app/opengraph-image.png",
		// 		width: 1200,
		// 		height: 630,
		// 	},
		// ],
	},
	twitter: {
		card: "summary_large_image",
		title: "Oblicuo | Architectural Cabinetry in Melbourne",
		description:
			"Luxury, custom cabinetry and furniture for modern Australian homes.",
		creator: "@Oblicuo",
		// images: ["https://oblicuo.vercel.app/opengraph-image.png"],
	},
	// icons: {
	// 	icon: "/favicon.ico",
	// },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
