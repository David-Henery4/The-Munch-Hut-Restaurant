import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/shad-comps/SelectComp";

const DrinkSelectContainer = () => {
  return (
    <div className="relative flex justify-center items-center mt-10">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Cocktails" />
        </SelectTrigger>
        <SelectContent className="overflow-y-auto bg-black">
          <SelectItem
            value="light"
            className="hover:cursor-pointer hover:bg-white hover:text-black"
          >
            Light
          </SelectItem>
          <SelectItem
            value="dark"
            className="hover:cursor-pointer hover:bg-white hover:text-black"
          >
            Dark
          </SelectItem>
          <SelectItem
            value="system"
            className="hover:cursor-pointer hover:bg-white hover:text-black"
          >
            System
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DrinkSelectContainer;
