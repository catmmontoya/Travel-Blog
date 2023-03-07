import React from "react";
import Card from "./Card";
import data from "./data";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Hero />
      <div className="element.style">
        <Navbar />
        <section>{cards}</section>
      </div>
    </div>
  );
}
