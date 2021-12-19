import React from "react";
import Products from "./components/products/Products";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
    <div>
      <Navbar />
    </div>
    <div>
      <Products />
    </div>
    </div>
  );
}

export default App;
