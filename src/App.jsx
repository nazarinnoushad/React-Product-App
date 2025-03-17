import { useState, useEffect } from "react";
import Product from "./components/Product";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // State to hold error messages

  // Function to fetch products
  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data); // Set the fetched data to state
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again later."); // Set error state
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <div className="App">
      <header className="bg-gray-900 p-4 text-center text-white">
        <h1 className="text-2xl font-semibold">All Products</h1>
      </header>
      <main className="p-6 bg-gray-100">
        {error ? (
          <p className="text-center text-red-500">{error}</p> // Show error message if there's an error
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Product key={product.id} item={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;


