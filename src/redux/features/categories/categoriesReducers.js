export const R_setCategories = (state, action) => {
  const { categories } = action.payload;

  state.categories = categories;
};

export const R_addNewCategory = (state, action) => {
  const { category } = action.payload;

  state.categories.push({ name: category, count: 0 });
  state.selected.push(category);
};

export const R_setSelected = {
  reducer: (state, action) => {
    const { category } = action.payload;

    state.selected.push(category);
  },
  prepare: category => ({
    payload: {
      category
    }
  })
};

export const R_removeSelected = {
  reducer: (state, action) => {
    const { category } = action.payload;
    state.selected = state.selected.filter(cat => cat !== category);
  },
  prepare: category => ({
    payload: {
      category
    }
  })
};

export const R_initCategories = () => ({
  categories: [],
  selected: []
});
