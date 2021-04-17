import Image from 'next/image';
import '../App.css';
import '../index.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <header className="App-header">
        <Image src="/logo.svg" width="40vmin" height="40vmin" alt="logo" />
        <Component {...pageProps} />
      </header>
    </div>
  );
}
