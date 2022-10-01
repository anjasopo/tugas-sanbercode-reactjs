import React from "react";
import Card from "./Card";

const Container = () => {
  return (
    <section className="bg-gray-200 p-5">
      <div className="container mx-auto mt-10">
        <h1 className="text-xl font-bold ">Find your data that you need!</h1>
      </div>
      <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
        <Card />
      </div>
    </section>
  );
};

export default Container;
