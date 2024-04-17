import React from "react";
import { Form, Link } from "react-router-dom";
import FormInput from "./FormInput";
import { useLoaderData } from "react-router-dom";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, sort, price } = params;
  const categories = meta.categories;
  const companies = meta.companies;
  const sorts = ["a-z", "z-a", "high", "low"];
  return (
    <Form
      method="get"
      className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
    >
      <FormInput
        type="search"
        name="search"
        label="Search Product"
        size="input-sm"
        defaultValue={search}
      ></FormInput>
      <FormSelect
        label="Select Category"
        name="category"
        size="select-sm"
        list={categories}
        defaultValue={category}
      ></FormSelect>

      <FormSelect
        label="Select Company"
        name="company"
        size="select-sm"
        list={companies}
        defaultValue={company}
      ></FormSelect>
      <FormSelect
        label="Sort By"
        name="sort"
        size="select-sm"
        list={sorts}
        defaultValue={sort}
      ></FormSelect>
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        defaultValue={price}
      ></FormRange>
      <FormCheckbox
        label="Free Shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      ></FormCheckbox>
      <button type="submit" className="btn btn-primary btn-sm">
        SEARCH
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        RESET
      </Link>
    </Form>
  );
};

export default Filters;
