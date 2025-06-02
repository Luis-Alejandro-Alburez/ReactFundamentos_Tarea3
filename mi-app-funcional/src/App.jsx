import "./App.css";
import { DataProvider } from "./context/DataContext";
import Auth from "./components/Auth";
import Factor from "./components/Factor";
import Products from "./components/Products";
import ModalProduct from "./components/ModalProduct";

function App() {
  return (
    <div className="app-container">
      <DataProvider>
        <Auth />
        <Factor />
        <Products />
        <ModalProduct />
      </DataProvider>
    </div>
  );
}

export default App;
