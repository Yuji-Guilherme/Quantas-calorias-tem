import { Home } from './pages/Home';
import { queryClient } from '@/services/queryClient';

import { QueryClientProvider } from '@tanstack/react-query';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </>
  );
}

export default App;
