// pages/_app.tsx

// 1. GLOBAL SWIPER CSS IMPORTS (Moved here from the component)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// 2. Your project's global CSS (usually imported here)
import '../styles/globals.css'; 

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // The Swiper CSS is now loaded globally for all components.
  return <Component {...pageProps} />;
}

export default MyApp;