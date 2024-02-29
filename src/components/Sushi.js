import React, {useState} from "react";

function Sushi({sushi, onAddPlate}) {
  const {name, img_url, price} = sushi;
  const [isEaten, setIsEaten] = useState(false);

  function handlePlateClick(event) {
    if(!isEaten) {
      setIsEaten(isEaten => !isEaten);
      onAddPlate(sushi)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handlePlateClick}>
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
