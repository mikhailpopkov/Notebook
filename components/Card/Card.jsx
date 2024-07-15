import "./Card.scss";

function Card({ children }) {
  return <button className="b-card">{children}</button>;
}

export default Card;
