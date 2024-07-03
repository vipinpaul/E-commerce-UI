import { useState, useContext } from "react";
import "../../style.css";
import Logo from "../../assets/images/logo.svg";
import Cart from "../../assets/images/icon-cart.svg";
import Avatar from "../../assets/images//image-avatar.png";
import { storeContext } from "../context/StoreContextProvider.jsx";
function MenuBar() {
  const { totalCount } = useContext(storeContext);

  return (
    <>
      <div className="menu-bar">
        <img alt="sneakers" src={Logo} />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="right-side">
          <div className="notify-cart">
            <img
              style={{ cursor: "pointer", height: "70%" }}
              alt="cart"
              src={Cart}
            />
            <span className="notify">{totalCount}</span>
          </div>
          <img
            style={{ height: "140%", cursor: "pointer" }}
            alt="profile"
            src={Avatar}
          />
        </div>
      </div>
    </>
  );
}

export default MenuBar;
