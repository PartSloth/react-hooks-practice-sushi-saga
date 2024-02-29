import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);
  const [total, setTotal] = useState(100);

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(sushis => setSushis(sushis));
  }, [])

  useEffect(() => {
    const updateTotal = total - plates.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    setTotal(updateTotal);
  }, [plates])

  function handleAddPlate(sushi) {
    if(total - sushi.price >= 0) {
      const updatePlates = [...plates, sushi.price]
      setPlates(updatePlates);
    } else {
      setSushis([]);
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onAddPlate={handleAddPlate}/>
      <Table plates={plates} total={total} />
    </div>
  );
}

export default App;
