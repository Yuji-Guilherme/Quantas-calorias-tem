import { Header } from '@/components/Header';
import { Logo } from '@/components/Logo';
import { Title } from '@/components/Title';
import { SearchTemplate } from '@/templates/SearchTemplate';
import { queryClient } from '@/services/queryClient';

import { QueryClientProvider } from '@tanstack/react-query';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header>
          <Logo />
        </Header>
        <Title />
        <SearchTemplate />
      </QueryClientProvider>
    </>
  );
}

export default App;
