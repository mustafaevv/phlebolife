import React from "react";

const Information = ({ id, title, text }) => {
  console.log(123,id);
  return (
    <div key={id}>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

export default Information;
