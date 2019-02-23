import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
      index: 0
    };
  }
  componentDidMount() {
    this.setState({ imgs: carouselData });
  }

  leftClick = () => {
    if (this.state.index === 0) {
      this.setState({ index: this.state.imgs.length - 1 });
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index - 1
        };
      });
    }
  };

  rightClick = () => {
    if (this.state.index === this.state.imgs.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index + 1
        };
      });
    }
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.imgs[this.state.index]}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    // console.log(this.state.index);
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>

        <span>{this.selectedImage()}</span>

        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
