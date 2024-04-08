"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/shad-comps/SelectComp";
// import Link from "next/link";
import { useRouter } from "next/navigation";

const SelectContainer = ({ foodCategoriesList, currentFoodCategory }) => {
  const router = useRouter();
  const currentCategory =
    currentFoodCategory === null ? "Starters" : currentFoodCategory;
  //
  const handleSearchParams = (e) => {
    router.replace(`?foodCat=${e}`, { scroll: false });
    return e
  };
  //
  return (
    <div className="relative flex justify-center items-center mt-12  smTab:hidden">
      <Select
        value={currentCategory}
        onValueChange={handleSearchParams}
        defaultValue={currentCategory}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={currentCategory} />
        </SelectTrigger>
        <SelectContent className="overflow-y-auto bg-black">
          {foodCategoriesList.map((category, i) => {
            return (
              <SelectItem
                key={i}
                value={category}
                className="hover:cursor-pointer hover:bg-white hover:text-black"
              >
                <p>{category}</p>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectContainer;
