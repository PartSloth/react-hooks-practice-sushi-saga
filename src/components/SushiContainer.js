import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, onAddPlate}) {
  const [fourSushi, setFourSushi] = useState([]);
  const [slice, setSlice] = useState([4, 8]);
  
  useEffect(() => {
    setFourSushi(sushis.slice(0,4))
  }, [sushis])

  function handleMoreClick() {
    const updateSlice = slice.map(slice => slice + 4);
    const updateFourSushi = sushis.slice(slice[0], slice[1]);
    setFourSushi(updateFourSushi);
    setSlice(updateSlice);
  }

  return (
    <div className="belt">
      {fourSushi.map(sushi => {
        return <Sushi 
        key={sushi.id} 
        sushi={sushi}
        onAddPlate={onAddPlate}
        />
      })}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
