import Input from '@/components/Input';
import { SearchMenu } from '@/components/SearchMenu';
import { useShowMenu } from './hook';

function SearchTemplate() {
  const { showMenu, setShowMenu } = useShowMenu();

  return (
    <section
      onFocus={() => setShowMenu(true)}
      onBlur={() => setShowMenu(false)}
      className="w-fit mx-auto mt-16 px-2 pt-1 pb-2 rounded-xl focus-within:bg-medium-blue"
    >
      <Input />
      <SearchMenu showMenu={showMenu} />
    </section>
  );
}

export { SearchTemplate };
