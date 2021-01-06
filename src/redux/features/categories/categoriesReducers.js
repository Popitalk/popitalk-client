export const R_setCategories = (state, action) => {
  const { categories, alreadySelected } = action.payload;

  const selectedCategories = alreadySelected.map(category =>
    categories.find(({ name }) => name === category)
  );

  state.categories = categories.filter(
    category => !selectedCategories.some(({ name }) => name === category.name)
  );
  state.selected = selectedCategories;
};

export const R_addNewCategory = (state, action) => {
  const { category } = action.payload;

  state.selected.push({ name: category, count: 0 });
};

export const R_setSelected = (state, action) => {
  const { name, count } = action.payload;

  state.selected.push({ name, count });
  state.categories = state.categories.filter(
    category => name !== category.name
  );
};

export const R_removeSelected = (state, action) => {
  const { name, count } = action.payload;

  state.categories.push({ name, count });
  state.selected = state.selected.filter(category => name !== category.name);
};

export const R_initCategories = () => ({
  categories: [],
  selected: []
});
