import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <section>
        <img
          className="card--image card--section1"
          src={`${props.item.image}`}
        />
        <div className="card--section2">
          <span>
            <img src="./images/LocationPin.png" className="card--pin" />
          </span>
          <span className="card--location">{props.item.location}</span>
          <a href={props.item.googleMapsUrl} className="card--maps">
            View on Google Maps
          </a>
          <div className="card--title">
            <span>{props.item.title}</span>
          </div>
          <div>
            <span className="card--date">{props.item.startDate} - </span>
            <span className="card--date">{props.item.endDate}</span>
          </div>
          <p className="card--text">{props.item.description}</p>
        </div>
      </section>
    </div>
  );
}
// console.log(Card);
