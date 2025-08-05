
import type { Metadata } from "next";
import { Nunito } from 'next/font/google';
import Header from '@components/header/Header';
import './globals.css';

const nunito = Nunito({
	subsets: ['latin'],
});
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
