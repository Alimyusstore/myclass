
import "../CSS/AbuLunch.css";

function Card({cardImg, cImgAlt, cardText, downText}) {
  return (
    <div className="div1">
      <div className="img1">
        <img src={cardImg} alt={cImgAlt} />
      </div>
      <div className="write1">
        <p>{cardText}</p>
      </div>
      <div className="A1">
        <p className="down">{downText}</p>
      </div>
    </div>
  );
}

export default Card