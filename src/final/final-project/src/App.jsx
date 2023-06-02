import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';

import './App.css'
import "./style/ProductCard.css"


const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("searchTerm") ?? "");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=" + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  },[searchTerm]);


  return (
    <div>
      <h1>Product List</h1>
      <input
        className='input'
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={clearSearch}>Clear</button>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;