import { useState } from 'react';

const useShowMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return { showMenu, setShowMenu };
};

export { useShowMenu };
