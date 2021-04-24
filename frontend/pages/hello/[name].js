import { useRouter } from 'next/router';
import { Greeter } from '../../components/Greeter';

export default function HelloName() {
  const router = useRouter();
  const { name } = router.query;

  return <Greeter name={name} />;
}
