import { useData } from "../context/DataContext";

const ModalProduct = () => {
  const { isModalOpen, setIsModalOpen, selectedProduct, factor } = useData();

  if (!isModalOpen || !selectedProduct) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={() => setIsModalOpen(false)}>
          &times;
        </button>
        <img
          src={selectedProduct.image}
          alt={selectedProduct.title}
          className="modal-image"
        />
        <h2>{selectedProduct.title}</h2>
        <p>{selectedProduct.description}</p>
        <p className="modal-price">
          Precio original: ${selectedProduct.price}
          <br />
          Precio con factor ({factor}x): $
          {(selectedProduct.price * factor).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ModalProduct;
