import Input from '@/components/Input';
import { SearchMenu } from '@/components/SearchMenu';
import { useSearchT } from './hook';

function SearchTemplate() {
  const {
    filterData,
    isLoading,
    isError,
    menuRef,
    menuIsOpen,
    setMenuIsOpen,
    addFirstFood,
    isPending,
    startTransition
  } = useSearchT();

  return (
    <section
      onFocus={() => setMenuIsOpen(true)}
      className="w-[632px] mt-16 mx-auto h-auto pt-1 rounded-t-xl relative z-10 data-[show=true]:bg-medium-blue drop-shadow-md md:w-[520px] md:mt-14 sm:w-11/12 sm:max-w-xs+ sm:mt-14 sm:pt-2 sm:rounded-t-md"
      data-show={menuIsOpen}
    >
      <Input
        addFirstFood={addFirstFood}
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
        menuRef={menuRef}
        transitionFn={startTransition}
      />
      <SearchMenu
        data={filterData}
        isLoading={isLoading}
        isError={isError}
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
        menuRef={menuRef}
        searchIsLoad={isPending}
      />
    </section>
  );
}

export { SearchTemplate };
