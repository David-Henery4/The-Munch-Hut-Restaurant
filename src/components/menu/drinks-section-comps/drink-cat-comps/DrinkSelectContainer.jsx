"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/shad-comps/SelectComp";
import useHandleSearchParams from "@/hooks/useHandleSearchParams";

const DrinkSelectContainer = ({
  drinkCategoriesList,
  currentDrinkCategory,
}) => {
  const { handleSearchParams } = useHandleSearchParams();
  const currentCategory =
    currentDrinkCategory === null ? "Tea & Coffee" : currentDrinkCategory;
  //
  return (
    <div className="relative flex justify-center items-center smTab:hidden">
      <Select
        value={currentCategory}
        defaultValue={currentCategory}
        onValueChange={(e) =>
          handleSearchParams({ catName: "drinkCat", catValue: e }, "foodCat")
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={currentCategory} />
        </SelectTrigger>
        <SelectContent className="overflow-y-auto bg-black">
          {drinkCategoriesList.map((category, i) => {
            return (
              <SelectItem
                key={i}
                value={category}
                className="hover:cursor-pointer hover:bg-white hover:text-black"
              >
                {category}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DrinkSelectContainer;
