import React, { Component } from "react";
import Card from "../Card/card";

class CardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  render() {
    return (
      <div className="allcardcontainer">
        {this.props.data.map((item) => (
          <Card data={item} />
        ))}
      </div>
    );
  }
}

export default CardSection;
