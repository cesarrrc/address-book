import React from "react";
import Item from "./Item";

const List = ({ list, setSelected }) => {
  return (
    <ul className="list">
      {list.map((item) => (
        <Item item={item} setSelected={setSelected} />
      ))}
    </ul>
  );
};

export default List;
