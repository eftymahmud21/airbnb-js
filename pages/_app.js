import '../styles/globals.css';

// very important and major bug you have to import the tailwind css in this folder
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
