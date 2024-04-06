import { SelectContainer, FoodCategoriesContainer } from "./food-cat-comps"

const FoodMenuCategories = ({ placeholderMenuCategories }) => {
  return (
    <>
      <SelectContainer placeholderMenuCategories={placeholderMenuCategories} />
      <FoodCategoriesContainer />
    </>
  );
};

export default FoodMenuCategories