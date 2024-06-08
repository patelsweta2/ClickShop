import { useEffect, useReducer, createContext, useContext } from "react";
import reducer from "../reducers/wishListReducer";

const wishListContext = createContext();

const getLocalWishListItems = () => {
  let localWishListData = localStorage.getItem("WishListCart");
  const parsedData = JSON.parse(localWishListData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};
const initialState = {
  wishListCart: getLocalWishListItems(),
};

export const WishlistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToWishList = (product, amount = 1, addedToWishList = false) => {
    return dispatch({
      type: "ADD_TO_WISHLIST",
      payload: { product, amount, addToWishList },
    });
  };
  const removeFromWishList = (id) => {
    return dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };
  const clearWishList = () => {
    console.log("clear wishlist");
    return dispatch({ type: "CLEAR_WISHLIST" });
  };
  useEffect(() => {
    localStorage.setItem("WishListCart", JSON.stringify(state.wishListCart));
  }, [state.wishListCart]);

  return (
    <wishListContext.Provider
      value={{ ...state, addToWishList, removeFromWishList, clearWishList }}
    >
      {children}
    </wishListContext.Provider>
  );
};

export const useWishListContext = () => {
  return useContext(wishListContext);
};
