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
      className="w-[632px] mx-auto h-auto mt-16 pt-1 rounded-t-xl relative z-10 data-[show=true]:bg-medium-blue drop-shadow-md"
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
