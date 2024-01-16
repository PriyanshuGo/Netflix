import React from "react";

function Row({ tittle, arr }) {
const imgUrl = "https://image.tmdb.org/t/p/w500";

  const Card = ({ img }) => <img src={img} alt="logo" className="card" />;
  return (
    <div>
      <div className="row">
        <h2>{tittle}</h2>
        <div>
          {arr.map((item, index) => (
            <div>
              <Card key={index} img={`${imgUrl}${item.poster_path}`} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Row;
