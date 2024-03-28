import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/shad-comps/SelectComp";

const SelectContainer = ({ placeholderMenuCategories }) => {
  //
  return (
    <div className="relative flex justify-center items-center mt-12  smTab:hidden">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Starters" />
        </SelectTrigger>
        <SelectContent className="overflow-y-auto bg-black">
          {placeholderMenuCategories.map((category) => {
            return (
              <SelectItem
                key={category?.id}
                value={category?.category}
                className="hover:cursor-pointer hover:bg-white hover:text-black"
              >
                {category?.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectContainer