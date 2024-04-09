
// Used on the server-side with the "Link Component"

const handleSetSearchParams = (
  currentSearchParams = { currentName: "cat-one", currentValue: null },
  newSearchParams = { newName: "cat-two", newValue: null }
) => {
  const { currentName, currentValue } = currentSearchParams;
  const { newName, newValue } = newSearchParams;
  if (currentValue) {
    return {
      query: {
        [currentName]: currentValue,
        [newName]: newValue,
      },
    };
  }
  return {
    query: {
      [newName]: newValue,
    },
  };
};

export default handleSetSearchParams;
