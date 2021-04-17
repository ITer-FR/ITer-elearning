import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

function App({ names }) {
  return (
    <div>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>Hello </p>
      <ul>
        {names.map((n) => (
          <li key={n.name}>
            <Link href={`hello/${n.name}`}>
              <a>{n.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

App.getInitialProps = async () => {
  const names = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}`).then((response) => response.data);
  return { names };
};

export default App;
