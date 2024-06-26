const filterReducer = () => {
  switch ((action, type)) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };
    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products } = state;
      let tempSortData = [...filter_products];

      const sortingProducts = (a, b) => {
        if (state.sorting_value === "lowest") return a.price - b.price;
        if (state.sorting_value === "highest") return b.price - a.price;
        if (state.sorting_value === "a-z") return a.title.localCompare(b.title);
        if (state.sorting_value === "z-a") return b.title.localCompare(a.title);
      };
      newSortData = tempSortData.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterData = [...all_products];

      const { text } = state.filters;

      if (text) {
        tempFilterData = tempFilterData.filter((currElem) => {
          return currElem.title.toLowerCase().includes(text);
        });
      }

      return {
        ...state,
        filter_products: tempFilterData,
      };

    case "SET_CATEGORY":
      const { category, products } = action.payload;
      let temp_products = [...products];
      let category_products;
      category_products =
        category === "all"
          ? temp_products
          : temp_products.filter((product) => product.category === category);
      return {
        ...state,
        filter_products: category_products,
      };

    case "CLEAR_FILTER":
      const allProducts = action.payload;
      console.log(allProducts);
      return {
        ...state,
        filter_products: allProducts,
        filters: {
          text: "",
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
