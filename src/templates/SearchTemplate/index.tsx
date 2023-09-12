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
    setOpenMenu,
    addFirstFood,
    isPending,
    startTransition
  } = useSearchT();

  return (
    <section
      onFocus={() => setOpenMenu(true)}
      role="section"
      className="w-[632px] mt-16 mx-auto h-auto pt-1 rounded-t-xl relative z-10 data-[show=true]:bg-medium-blue data-[show=true]:dark:bg-dark-gray drop-shadow-md md:min-w-sm md:w-3/5 md:max-w-lg md:mt-14 sm:w-11/12 sm:max-w-xs+ sm:mt-14 sm:pt-2 sm:rounded-t-md"
      data-show={menuIsOpen}
    >
      <Input
        addFirstFood={addFirstFood}
        setOpenMenu={setOpenMenu}
        menuIsOpen={menuIsOpen}
        menuRef={menuRef}
        transitionFn={startTransition}
      />
      <SearchMenu
        data={filterData}
        isLoading={isLoading}
        isError={isError}
        setOpenMenu={setOpenMenu}
        menuIsOpen={menuIsOpen}
        menuRef={menuRef}
        searchIsLoad={isPending}
      />
    </section>
  );
}

export { SearchTemplate };
