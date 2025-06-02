const Product = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
