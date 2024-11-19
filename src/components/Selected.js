import React from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Selected = ({
  picture: { large },
  name: { first, last },
  dob: { date, age },
  gender,
  email,
  phone,
  cell,
  setSelected,
}) => {
  return (
    <div className="selected" onClick={() => setSelected(null)}>
      <div className="selected-content" onClick={(e) => e.stopPropagation()}>
        <div className="close-selected" onClick={() => setSelected(null)}>
          &#10006;
        </div>
        <div className="img-container">
          <img src={large} alt="" />
        </div>
        <h3>
          {first} {last}
        </h3>
        <p>Email: {email}</p>
        <p>Home Phone: {phone}</p>
        <p>Cell Phone: {cell}</p>
        <p>
          Birthday: {months[new Date(date).getMonth()]}{" "}
          {new Date(date).getDay()}, {new Date(date).getFullYear()}
        </p>
        <p>Age: {age}</p>
        <p>
          Gender:{" "}
          {String(gender).charAt(0).toUpperCase() + String(gender).slice(1)}
        </p>
      </div>
    </div>
  );
};

export default Selected;
