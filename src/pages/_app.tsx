import '../styles/global.css';

import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

const jetbrains = localFont({
	src: [
		{
			path: '../../public/fonts/JetBrainsMono-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/JetBrainsMono-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--jetbrains',
});

const karla = localFont({
	src: [
		{
			path: '../../public/fonts/Karla-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--karla',
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={`${karla.variable} ${jetbrains.variable} font-karla`}>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
