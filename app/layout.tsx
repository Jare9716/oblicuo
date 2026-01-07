import type { Metadata } from "next";

import "@/styles/globals.css";
import { geistSans, geistMono } from "@/styles/fonts";

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
		"cabinet makers",
		"high end cabinet makers",
	],
	metadataBase: new URL("https://www.oblicuo.com.au/"),
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
		images: [
			{
				url: "https://www.oblicuo.com.au//opengraph-image.png",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Oblicuo | Architectural Cabinetry in Melbourne",
		description:
			"Luxury, custom cabinetry and furniture for modern Australian homes.",
		creator: "@Oblicuo",
		images: ["https://www.oblicuo.com.au//opengraph-image.png"],
	},
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon-light.ico",
				href: "/favicon-light.ico",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon-dark.ico",
				href: "/favicon-dark.ico",
			},
		],
	},
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
