import { SecondaryHeader } from "../shared"
import { MenuItemsContainer, FoodMenuCategories } from "./food-section-comps";

const placeholderMenuCategories = [
  {
    id:1,
    label:"Starters",
    category: "starters",
    isActive: true
  },
  {
    id:2,
    label:"Steak",
    category: "steak",
    isActive: false
  },
  {
    id:3,
    label:"Salads",
    category: "salads",
    isActive: false
  },
  {
    id:4,
    label:"Pasta",
    category: "pasta",
    isActive: false
  },
  {
    id:5,
    label:"Sandwiches",
    category: "sandwiches",
    isActive: false
  },
  {
    id:6,
    label:"Chicken",
    category: "Chicken",
    isActive: false
  },
  {
    id:7,
    label:"Pizza",
    category: "Pizza",
    isActive: false
  },
  {
    id:8,
    label:"Vegan",
    category: "Vegan",
    isActive: false
  },
  {
    id:9,
    label:"Soups",
    category: "soups",
    isActive: false
  },
  {
    id:10,
    label:"Wraps",
    category: "wraps",
    isActive: false
  },
  {
    id:12,
    label:"Seafood",
    category: "seafood",
    isActive: false
  },
  {
    id:13,
    label:"Burgers",
    category: "burgers",
    isActive: false
  },
  {
    id:14,
    label:"BBQ",
    category: "bbq",
    isActive: false
  },
  {
    id:15,
    label:"Spanish",
    category: "spanish",
    isActive: false
  },
  {
    id:16,
    label:"Desserts",
    category: "desserts",
    isActive: false
  },
]

const FoodSection = () => {
  return (
    <section className="col-start-2 col-end-12 max-w-[1160px] mx-auto py-14 text-center smTab:py-28">
      <SecondaryHeader>
        We have something for <span className="text-red">everyone</span>
      </SecondaryHeader>

      <FoodMenuCategories
        placeholderMenuCategories={ placeholderMenuCategories }
      />

      <MenuItemsContainer />
    </section>
  );
}

export default FoodSection