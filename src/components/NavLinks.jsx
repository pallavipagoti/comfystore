import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Checkout } from "../pages";
const links = [
  { id: nanoid(), url: "/", text: "Home" },
  { id: nanoid(), url: "about", text: "About" },
  { id: nanoid(), url: "products", text: "Products" },
  { id: nanoid(), url: "cart", text: "Cart" },
  { id: nanoid(), url: "checkout", text: "Checkout" },
  { id: nanoid(), url: "orders", text: "Orders" },
];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === "checkout" || url === "orders") && !user) return null;
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
