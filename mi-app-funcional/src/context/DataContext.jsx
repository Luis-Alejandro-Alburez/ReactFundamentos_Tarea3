import { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [factor, setFactor] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const login = (username, password) => {
    if (username && password) {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(
          "Error al cargar los productos. Intenta nuevamente más tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <DataContext.Provider
      value={{
        user,
        login,
        logout,
        products,
        loading,
        error,
        selectedProduct,
        setSelectedProduct,
        isModalOpen,
        setIsModalOpen,
        factor,
        setFactor,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData debe usarse dentro de un DataProvider");
  }
  return context;
};
