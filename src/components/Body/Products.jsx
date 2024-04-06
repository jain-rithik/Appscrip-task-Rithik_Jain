import React, { useState } from "react";
import Topnavfilter from "./Topnavfilter";
import Sidefilter from "./Sidefilter";
import ProductList from "./ProductList";
import "./Products.css";

const Products = () => {
  const [showSideFilter, setShowSideFilter] = useState(true);

  const handleSideFilter = () => {
    setShowSideFilter(!showSideFilter);
  };

  return (
    <div className="main-container">
      <Topnavfilter sideFilterValue={showSideFilter} setShowSideFilter={handleSideFilter} />
      <div className="secondary-container">
        {showSideFilter && <Sidefilter />}
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
