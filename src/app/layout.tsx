import type { Metadata } from 'next';
import './globals.css';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import ThemeToggle from '@/components/ThemeToggle';
import { SideBar } from '@/components/SideBar';
import Slider from '@/components/Slider';
import NextTopLoader from 'nextjs-toploader';
import { lato, lustria } from '@/components/fonts/fonts';

export const metadata: Metadata = {
	title: 'Suresh Thapa',
	description: 'Frontend Web Developer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='!scroll-smooth' suppressHydrationWarning>
			<body
				className={cn(
					'flex overflow-hidden h-screen bg-background antialiased font-lato',
					lustria.variable,
					lato.variable
				)}
			>
				<NextTopLoader template='<div class="bar" role="bar"><div class="peg"></div></div>' />
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<SideBar />
					<div className='absolute top-6 right-10 md:right-20 z-50'>
						<ThemeToggle />
					</div>
					<div className='absolute md:hidden top-6 left-6 z-50'>
						<Slider />
					</div>
					<div className='lg:pl-2 lg:pt-2 flex-1 overflow-y-auto'>
						<div className='flex-1 min-h-screen lg:rounded-tl-xl overflow-y-auto border'>{children}</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
