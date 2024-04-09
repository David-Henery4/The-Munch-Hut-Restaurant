// Used on client side to set Params with the select component
// NOT USED WITH LINK

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const useHandleSearchParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);
  //
  const handleSearchParams = (primaryCategory, secondaryCategoryName) => {
    //
    if (params.has(secondaryCategoryName)) {
      const secondaryCatValue = params.get(secondaryCategoryName);
      //
      const newParams = new URLSearchParams({
        [primaryCategory?.catName]: primaryCategory?.catValue,
        [secondaryCategoryName]: secondaryCatValue,
      });
      router.replace(`?${newParams.toString()}`, {
        scroll: false,
      });
      return;
    }
    //
    const newSingleParams = new URLSearchParams({
      [primaryCategory?.catName]: primaryCategory?.catValue,
    });
    router.replace(`?${newSingleParams}`, { scroll: false });
  };
  //
  return { handleSearchParams };
};

export default useHandleSearchParams;
