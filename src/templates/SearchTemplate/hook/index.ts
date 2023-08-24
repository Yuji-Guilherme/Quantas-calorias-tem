import { useState } from 'react';

const useShowMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return { showMenu, setShowMenu };
};

export { useShowMenu };
