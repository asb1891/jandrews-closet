import React from "react";
import Clothing from "./Clothing";

function ClothingGrid({ clothes }) {

  const clothingInfo = clothes.map(clothing => <Clothing key={clothing.id} clothing={clothing} />)

  return (
    <div className="cards">{clothingInfo} </div>
  );
}

export default ClothingGrid;
