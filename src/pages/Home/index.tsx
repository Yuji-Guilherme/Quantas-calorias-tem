import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { SearchTemplate } from '@/templates/SearchTemplate';
import { CardStack } from '@/templates/CardStack';

function Home() {
  return (
    <>
      <Header />
      <Title />
      <SearchTemplate />
      <CardStack />
    </>
  );
}

export { Home };
