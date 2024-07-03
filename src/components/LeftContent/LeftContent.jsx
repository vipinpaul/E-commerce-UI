import { useState } from "react";
import "../../style.css";

function LeftContent() {
  const [image, setImage] = useState("image-product-1.jpg");
  const changeImage = (value) => {
    setImage(`image-product-${value}.jpg`);
  };
  return (
    <>
      <div className="content">
        <img className="sneaker-img" src={image} alt="thumnail" />
        <div className="sneaker-thumbnails">
          <img
            className="thumbnails"
            style={
              image === "image-product-1.jpg"
                ? {
                    opacity: "50%",
                    border: "2px solid hsl(26, 100%, 55%)",
                  }
                : {}
            }
            src="image-product-1-thumbnail.jpg"
            onClick={() => changeImage(1)}
          />
          <img
            className="thumbnails"
            style={
              image === "image-product-2.jpg"
                ? {
                    opacity: "50%",
                    border: "2px solid hsl(26, 100%, 55%)",
                  }
                : {}
            }
            src="image-product-2-thumbnail.jpg"
            onClick={() => changeImage(2)}
          />
          <img
            className="thumbnails"
            style={
              image === "image-product-3.jpg"
                ? {
                    opacity: "50%",
                    border: "2px solid hsl(26, 100%, 55%)",
                  }
                : {}
            }
            src="image-product-3-thumbnail.jpg"
            onClick={() => changeImage(3)}
          />
          <img
            className="thumbnails"
            style={
              image === "image-product-4.jpg"
                ? {
                    opacity: "50%",
                    border: "2px solid hsl(26, 100%, 55%)",
                  }
                : {}
            }
            src="image-product-4-thumbnail.jpg"
            onClick={() => changeImage(4)}
          />
        </div>
      </div>
    </>
  );
}

export default LeftContent;
