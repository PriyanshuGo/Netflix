import React from "react";

function Row({ title, arr }) {
  const Card = ({ img }) => <img src={img} alt="logo" className="card" />;
  return (
    <div>
      <div className="row">
        <h2>{title}</h2>
        <div className="cards">
          {arr.map((item, index) => (
            <div key={index} className="card-container">
              <Card img={item.Poster} />
              <h3>{item.Title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Row;
