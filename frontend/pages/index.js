import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home({ names = [] } = {}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span>Hello</span>
      <ul>
        {names.map((name) => (
          <li key={name}>
            <Link href={`/hello/${name}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Home.getInitialProps = async () => {
  const names = await axios
    .get(process.env.NEXT_PUBLIC_BACKEND_URL)
    .then((response) => response.data);
  console.log({ names });

  return { names: names.map((n) => n.name) };
};
