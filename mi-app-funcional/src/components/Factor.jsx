import { useData } from "../context/DataContext";

const Factor = () => {
  const { factor, setFactor } = useData();

  return (
    <div className="factor-container">
      <h3>Factor multiplicador de precios:</h3>
      <input
        type="number"
        min="1"
        step="0.1"
        value={factor}
        onChange={(e) => setFactor(Number(e.target.value))}
      />
    </div>
  );
};

export default Factor;
