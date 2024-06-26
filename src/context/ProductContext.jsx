import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducer";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  products: [],
  productDetails: {},
  show: false,
};

const API = "https://dummyjson.com/products?limit=30";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (API) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(API);
      const products = await response.data;

      dispatch({ type: "SET_API_DATA", payload: products.products });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  };
  const getProductDetails = (product) => {
    dispatch({ type: "GET_PRODUCT_DETAILS", payload: product });
  };
  const openProductModal = () => {
    dispatch({ type: "OPEN_PRODUCT_MODAL" });
  };
  const closeProductModal = () => {
    dispatch({ type: "CLOSE_PRODUCT_MODAL" });
  };
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getProductDetails,
        openProductModal,
        closeProductModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
