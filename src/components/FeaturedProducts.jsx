import React from "react";
import SectionTitle from "./sectionTitle";
import ProductsGrid from "./ProductsGrid";

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="Featured Products"></SectionTitle>
      <ProductsGrid></ProductsGrid>
    </div>
  );
};

export default FeaturedProducts;
