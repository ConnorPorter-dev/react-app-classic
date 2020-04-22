import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  render() {
    return (
      <div onClick={() => this.cardClicked()} className="card--container">
        <a href={this.props.data.href}>
          <div className="card">
            <img className="card--img" src={this.props.data.thumbnail} />
            <p className="card--title">{this.props.data.title}</p>
            <p className="card--desc">
              {this.state.clicked.toString()}
              {this.props.data.ingredients}
            </p>
          </div>
        </a>
      </div>
    );
  }

  cardClicked() {
    this.setState({ clicked: !this.state.clicked });
  }
}

export default Card;
