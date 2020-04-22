import React, { Component } from "react";
import Counter from "./components/Counter/counter";
import Header from "./components/Header/header";
import CardSection from "./components/CardSection/cardSection";
const data2 = require("./data.json");
const data = [
  {
    title: "bigtitle",
    desc: "descriptionarino",
    imgsrc:
      "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  },
  {
    title: "bigtitle",
    desc: "descriptionarino",
    imgsrc:
      "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

export default App;
