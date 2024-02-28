import React, { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "./auth-context";
import axios from "axios";

const MyContext = createContext();

const AppContext = (props) => {
  const authCtx = useContext(AuthContext);

  const productList = [
    {
      id: "album1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "album2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "album3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "album4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const [cart, setCart] = useState([]);

  const addItem = async (id) => {
    try {
      const addedProduct = productList.find((product) => product.id === id);
      const addedProductIndex = cart.find((product) => product.id === id);
      if (addedProductIndex) {
        alert("The item is already in the cart!!");
      }
      if (addedProduct && !addedProductIndex) {
        const userMail = localStorage.getItem("email");
        const response = await axios.post(
          `https://crudcrud.com/api/ed4d47468ee748e1aef09d02ee8f7980/cart${userMail}`,
          addedProduct
        );
        const addedProductWithId = { ...addedProduct, _id: response.data._id };
        setCart((prevCart) => [...prevCart, addedProductWithId]);
      }
    } catch (err) {
      console.log("Product not added- " + err);
    }
  };

  const removeItem = async (itemid, id) => {
    try {
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemid));
      const userMail = localStorage.getItem("email");
      await axios.delete(
        `https://crudcrud.com/api/ed4d47468ee748e1aef09d02ee8f7980/cart${userMail}/${id}`
      );
    } catch (err) {
      console.log("Item not removed- " + err);
    }
  };
  const fetchItems = async () => {
    try {
      const userMail = localStorage.getItem("email");
      const response = await axios.get(
        `https://crudcrud.com/api/ed4d47468ee748e1aef09d02ee8f7980/cart${userMail}`
      );
      setCart(response.data);
    } catch (err) {
      console.log("Fetch Items failed- " + err);
    }
  };

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      fetchItems();
    }
  }, [authCtx.userEmail, authCtx.isLoggedIn]);

  return (
    <MyContext.Provider value={{ productList, cart, addItem, removeItem }}>
      {props.children}
    </MyContext.Provider>
  );
};

export { AppContext, MyContext };