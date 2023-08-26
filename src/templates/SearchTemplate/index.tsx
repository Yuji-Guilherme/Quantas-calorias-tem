import Input from '@/components/Input';
import { SearchMenu } from '@/components/SearchMenu';
import { useSearchT } from './hook';

function SearchTemplate() {
  const {
    filterData,
    isLoading,
    isError,
    menuIsOpen,
    setMenuIsOpen,
    addFirstFood
  } = useSearchT();

  return (
    <section
      onFocus={() => setMenuIsOpen(true)}
      className="w-[632px] mx-auto h-auto mt-16 px-2 pt-1 pb-2 rounded-xl data-[show=true]:bg-medium-blue"
      data-show={menuIsOpen}
    >
      <Input
        addFirstFood={addFirstFood}
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
      />
      <SearchMenu
        data={filterData}
        isLoading={isLoading}
        isError={isError}
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
      />
    </section>
  );
}

export { SearchTemplate };
