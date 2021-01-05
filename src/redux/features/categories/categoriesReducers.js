export const R_setCategories = (state, action) => {
  const { categories } = action.payload;

  state.categories = categories;
};

export const R_addNewCategory = (state, action) => {
  const { category } = action.payload;

  state.selected.push({ name: category, count: 0 });
};

export const R_setSelected = {
  reducer: (state, action) => {
    const { name, count } = action.payload;

    state.selected.push({ name, count });
    state.categories = state.categories.filter(
      category => name !== category.name
    );
  }
};

export const R_removeSelected = {
  reducer: (state, action) => {
    const { name, count } = action.payload;

    state.categories.push({ name, count });
    state.selected = state.selected.filter(category => name !== category.name);
  }
};

export const R_initCategories = () => ({
  categories: [],
  selected: []
});
