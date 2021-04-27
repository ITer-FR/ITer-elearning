import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { selectFormationList } from '../app/formation/selectors/select-formation-list';
import { selectIsFormationListLoading } from '../app/formation/selectors/select-is-formation-list-loading';
import { getFormationList } from '../app/formation/use-cases/get-formation-list';
import styles from '../styles/Home.module.css';

export default function Home({ names = [] } = {}) {
  const loading = useSelector(selectIsFormationListLoading);
  const formationList = useSelector(selectFormationList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFormationList());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading && <span>Loading...</span>}
      {formationList.length > 0 && (
        <ul>
          {formationList.map((formation) => (
            <li key={formation.id}>
              {formation.title} | {formation.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Home.getInitialProps = async () => {
//   const names = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL).then((response) => response.data);
//   console.log({ names });

//   return { names: names.map((n) => n.name) };
// };
