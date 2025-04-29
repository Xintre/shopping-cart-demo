import './globals.css';

import { Inconsolata, Playfair_Display } from 'next/font/google';

import { AppThemeProvider } from '@/components/AppThemeProvider';
import type { Metadata } from 'next';
import { TransparentOnNoHoverAppBarWithAnimation } from '@/components/TransparentOnNoHoverAppBarWithAnimation';

const inconsolata = Inconsolata({
	variable: '--font-inconsolata',
	subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	variable: '--font-playfair',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Zoowood',
	description: 'Zoowood! Wooden accessories for pets',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${playfairDisplay.variable} ${inconsolata.variable}`}
		>
			<body>
				<AppThemeProvider>
					<TransparentOnNoHoverAppBarWithAnimation />
					{children}
				</AppThemeProvider>
			</body>
		</html>
	);
}
