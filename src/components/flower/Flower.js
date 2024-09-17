import "./Flower.css";
import Image from "next/image";
import heartIcon from "../../app/assets/images/icons/Heart.svg";
import flower from "../../app/assets/images/images/flower.png";
const Flower = () => {
  return (
    <>
      <section className="flower-section">
        <div>
          <h2>Minimal red tulip flower vase.</h2>
          <span>$18.99</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat quis
            imperdiet sodales. Add to Cart
          </p>
          <button>Add to Cart</button>
          <Image src={heartIcon} alt="" />
        </div>
        <div>
          <Image src={flower} alt="" />
        </div>
      </section>
    </>
  );
};

export default Flower;
