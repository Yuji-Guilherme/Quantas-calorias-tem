import { queryClient } from '@/services/queryClient';
import { Home } from './pages/Home';

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
