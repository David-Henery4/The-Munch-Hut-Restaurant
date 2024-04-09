"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/shad-comps/SelectComp";
import useHandleSearchParams from "@/hooks/useHandleSearchParams";

const SelectContainer = ({ foodCategoriesList, currentFoodCategory }) => {
  const { handleSearchParams } = useHandleSearchParams();
  const currentCategory =
    currentFoodCategory === null ? "Starters" : currentFoodCategory;
  //
  return (
    <div className="relative flex justify-center items-center mt-12  smTab:hidden">
      <Select
        value={currentCategory}
        onValueChange={(e) =>
          handleSearchParams({ catName: "foodCat", catValue: e }, "drinkCat")
        }
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
