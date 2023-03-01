import React from "react";
import Card from "./Card";
import data from "./data";
import Navbar from "./Navbar";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    // this div
    <div className="element.style">
      <Navbar />
      <section>{cards}</section>
    </div>
  );
}
