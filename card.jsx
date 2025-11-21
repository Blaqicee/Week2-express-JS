const Card = ({ title, children }) => (
  <div className="border rounded p-4 shadow-md my-2">
    <h2 className="font-bold">{title}</h2>
    <div>{children}</div>
  </div>
);
export default Card;
