import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { SingleProduct } from "../pages";
import { formatPrice } from "../utils/index";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { id, attributes } = product;
        const { title, price, image } = attributes;
        return (
          <Link
            key={id}
            to={`/products/${id}`}
            className="card w-full shadow-xl hover:shadow-2xl object-cover"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={id}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{formatPrice(price)}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
