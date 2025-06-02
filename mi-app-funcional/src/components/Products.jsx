import { useData } from "../context/DataContext";
import Product from "./Product";

const Products = () => {
  const { products, loading, error, setSelectedProduct, setIsModalOpen } =
    useData();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  if (loading) return <p className="loading">Cargando productos...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <h2>Productos disponibles:</h2>
      <div className="products-grid">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
