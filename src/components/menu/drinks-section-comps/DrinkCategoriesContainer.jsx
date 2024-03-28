const placeholderDrinkCategries = [
  {
    id: 1,
    label: "Cocktails",
    category: "cocktails"
  },
  {
    id: 2,
    label: "Beers",
    category: "beers"
  },
  {
    id: 3,
    label: "Wine",
    category: "wine"
  },
  {
    id: 4,
    label: "Spirits",
    category: "spirits"
  },
  {
    id: 5,
    label: "Water & Soft drinks",
    category: "water-and-soft-drinks"
  },
  {
    id: 6,
    label: "Tea & Coffee",
    category: "tea-and-coffee"
  },
]

const DrinkCategoriesContainer = () => {
  return (
    <div className="w-full justify-between items-center hidden text-3xl flex-nowrap flex-col smTab:flex">
      {placeholderDrinkCategries.map((cat) => {
        return <button key={cat.id} className="w-full p-6 pl-0 border-b border-b-white text-left">{cat.label}</button>;
      })}
    </div>
  );
}

export default DrinkCategoriesContainer