import React, { Component } from "react";
import Counter from "./components/Counter/counter";
import Header from "./components/Header/header";
import CardSection from "./components/CardSection/cardSection";
const data2 = require("./data.json");

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Counter />
        <CardSection data={data2} />
      </div>
    );
  }
}

export default Home;
