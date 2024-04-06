const placeholderDrinkCategries = [
  {
    id: 1,
    label: "Cocktails",
    category: "cocktails",
    isActive: true
  },
  {
    id: 2,
    label: "Beers",
    category: "beers",
    isActive: false
  },
  {
    id: 3,
    label: "Wine",
    category: "wine",
    isActive: false
  },
  {
    id: 4,
    label: "Spirits",
    category: "spirits",
    isActive: false
  },
  {
    id: 5,
    label: "Water & Soft drinks",
    category: "water-and-soft-drinks",
    isActive: false
  },
  {
    id: 6,
    label: "Tea & Coffee",
    category: "tea-and-coffee",
    isActive: false
  },
]

const DrinkCategoriesContainer = () => {
  return (
    <div className="w-full justify-between items-center hidden text-3xl flex-nowrap flex-col smTab:flex">
      {placeholderDrinkCategries.map((cat) => {
        return (
          <button
            key={cat.id}
            className={`w-full p-6 pl-0 border-b text-left hover:text-gold hover:border-gold first:pt-0 ${
              cat.isActive ? "border-b-red text-red" : "border-b-white"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}

export default DrinkCategoriesContainer