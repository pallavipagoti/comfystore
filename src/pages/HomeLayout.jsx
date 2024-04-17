import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Loading, Header } from "../components";

const HomeLayout = () => {
  const Navigation = useNavigation();
  const isPageLoading = Navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
