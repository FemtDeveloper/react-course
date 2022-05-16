import React from "react";
import GiftGridItem from "./GiftGridItem";
import { useFetchGifs } from "../hooks/UseFetchGifs";

const GiftGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);
  return (
    <>
      {loading && "Cargando..."}
      <h3>{category}</h3>
      <div className="card-grid animate__animated animate__fadeIn animate__delay-2s">
        {data.map((img) => (
          <GiftGridItem {...img} key={img.id} />
        ))}
      </div>
    </>
  );
};

export default GiftGrid;
