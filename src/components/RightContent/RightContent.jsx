import { useContext, useState } from "react";
import CartIcon from "../../assets/images/icon-cart.svg";
import PlusIcon from "../../assets/images/icon-plus.svg";
import MinusIcon from "../../assets/images/icon-minus.svg";
import "../../style.css";
import { storeContext } from "../context/StoreContextProvider.jsx";

function RightContent() {
  const [count, setCount] = useState(0);
  const { setTotalCount } = useContext(storeContext);

  return (
    <>
      <div className="content">
        <p className="heading">Sneaker Company</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className="details">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <h2 style={{ margin: "0" }}>$125.00</h2>
          <button
            style={{
              height: "fit-content",
              backgroundColor: "black",
              color: "white",
              borderRadius: "4px!important",
            }}>
            50%
          </button>
        </div>
        <h5
          style={{
            textDecoration: "line-through",
            fontWeight: "400",
            marginTop: "2%",
          }}>
          $250.00
        </h5>
        <div style={{ height: "40p", display: "flex", gap: "3%" }}>
          <div style={{ display: "flex", width: "30%" }}>
            <button
              className="buttons"
              style={{ cursor: "pointer", borderRadius: "5px 0px 0px 5px" }}
              onClick={() => count !== 0 && setCount(count - 1)}>
              <img src={MinusIcon} />
            </button>
            <button className="buttons" style={{ fontWeight: "900" }}>
              {count}
            </button>
            <button
              className="buttons"
              style={{ cursor: "pointer", borderRadius: "0px 5px 5px 0px" }}
              onClick={() => setCount(count + 1)}>
              <img src={PlusIcon} />
            </button>
          </div>
          <div style={{ width: "50%" }}>
            <button className="add2Cart" onClick={() => setTotalCount(count)}>
              <img src={CartIcon} />
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default RightContent;
