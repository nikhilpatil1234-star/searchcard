import React from "react";
import { Component } from "react";
class CardList extends Component {
  render() {
    let { Data } = this.props;

    return (
      <>
        <div className="card-list">
          {Data.map((store) => (
            <div className="card-container" key={store.id}>
              <img src={"https://robohash.org/4?set=set4 "} alt="monster1" />

              <h2> {store.name}</h2>
              <p> {store.email}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default CardList;
