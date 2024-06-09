import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { AppProvider } from "./context/ProductContext.jsx";
import App from "./App.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { FilterContextProvider } from "./context/FilterContext.jsx";
import { WishlistContextProvider } from "./context/WishListContext.jsx";
import "./index.css";

const domainName = import.meta.env.VITE_DOMAIN_NAME;
const clientId = import.meta.env.VITE_CLIENT_ID;
import { FilterContextProvider } from "./context/FilterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domainName}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppProvider>
        <FilterContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <App />
            </WishlistContextProvider>
          </CartContextProvider>
        </FilterContextProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);
