import { formatPrice } from "../utils";
import { Link, useLoaderData } from "react-router-dom";

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className=" mt-12 grid gap-y-8">
      {products.map((product) => {
        const { id, attributes } = product;
        const { image, title, price, company } = attributes;
        return (
          <Link
            to={`/products/${id}`}
            key={id}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group "
          >
            <img
              src={image}
              alt={title}
              className="w-24 h-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300  "
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h4 className="capitalize text-neutral-content text-md">
                {company}
              </h4>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">
              {formatPrice(price)}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
