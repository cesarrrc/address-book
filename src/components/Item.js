import React from "react";

const Item = ({
  item: {
    login: { uuid },
    picture: { large },
    name: { first, last },
    location: { country },
  },
  setSelected,
  item,
}) => {
  return (
    <li
      key={uuid}
      className="item"
      value={item}
      onClick={() => setSelected(item)}
    >
      <div className="img-container">
        <img src={large} alt="" />
      </div>
      <h3>
        {first} {last}
      </h3>
      <h5>{country}</h5>
    </li>
  );
};

export default Item;
